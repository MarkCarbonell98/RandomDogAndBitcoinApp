/*SECTION 7*/
// AJAX

// Asynchronous JavaScript and XML
/*It works to send and request data from the Server without
disturbing the current page*/

/*WE MAKE REQUESTS USING:
XMLHTTP	request
The Fetch API 
JQuery, Axios, etc*/

/*AJAX is triggered by page events, then in realizes we need
more content, then it communicates with the server and
requests it, then the server sends the content back to the
page and at last it is placed where AJAX is programmed to
do so*/

/*API: application programming interface*/

// XML and JSON
/*XML Extended Markup Language

works alike HTML but does not describe presentation like HTML
*/

/*JSON
JavaScript Object Notation, looks almost like JavaScript*/

// AJAX request
let XHR = new XMLHttpRequest();
XHR.onreadystatechange = function() {
	if (XHR.readyState === 4 && XHR.status === 200) {
		console.log(XHR.responseText);
	}
};
XHR.open('GET', 'https://api.github.com/zen');
XHR.send();


let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status === 200) {
		console.log(xhr.responseText)
	}
};
xhr.open('GET', 'https://api.github.com/zen');
xhr.send();


let xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function() {
	if (xhr2.readyState == 4) {
		if (xhr2.status == 200) {
			console.log(xhr2.responseText);
		} else {
			console.log('There was a problem');
		}
	}
}
xhr2.open('GET', 'https://api.github.com/zen');
xhr2.send();




// FIRST AJAX APP
let btn = document.querySelector('#btn');
let img = document.querySelector('#photo');

//listen for clicks
btn.addEventListener('click', function() {
	//make the request
	let xhr3 = new XMLHttpRequest();
	xhr3.onreadystatechange = function() {
		if (xhr3.readyState == 4 && xhr3.status == 200) {
			let url = JSON.parse(xhr3.responseText).message;
			img.src = url;
		}
	};
	xhr3.open('GET', 'https://dog.ceo/api/breeds/image/random');
	xhr3.send();
});

//second AJAX app
const button = document.querySelector('#second-button');
let span = document.querySelector('#span');
const dollars = document.querySelector('#dollars');
const euros = document.querySelector('#euros');
const pounds = document.querySelector('#pounds');
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

document.addEventListener('DOMContentLoaded', () => {
	let xhr5 = new XMLHttpRequest();
	xhr5.onreadystatechange = function() {
		if (xhr5.status == 200 && xhr5.readyState == 4) {
			let dollarRate2 = JSON.parse(xhr5.responseText).bpi.USD.rate;
			span.innerHTML = dollarRate2 + ' USD';
			dollars.checked = true;
		}
	};
	xhr5.open('GET', url);
	xhr5.send();
});

button.addEventListener('click', function() {
	let xhr4 = new XMLHttpRequest();
	xhr4.onreadystatechange = function() {
		if (xhr4.status == 200 && xhr4.readyState == 4) {
			if (dollars.checked) {
				let dollarRate = JSON.parse(xhr4.responseText).bpi.USD.rate;
				span.innerHTML = dollarRate + ' USD';
			} else if (euros.checked) {
				let euroRate = JSON.parse(xhr4.responseText).bpi.EUR.rate;
				span.innerHTML = euroRate + ' EUR';
			} else if (pounds.checked) {
				let poundRate = JSON.parse(xhr4.responseText).bpi.GBP.rate;
				span.innerHTML = poundRate + ' GBP';
			}
		}
	};
	xhr4.open('GET', url);
	xhr4.send();
});

	/*// o tambien se puede
	let priceDisp = document.querySelector('#price');
	let currency = 'EUR';

	button.addEventListener('onMouseOver', () => {
		let xhr5 = new XMLHttpRequest();
		xhr5.onreadystatechange = function() {
			if (xhr5.status == 200 && xhr.readyState == 4) {
				let data = JSON.parse(xhr5.responseText);
				let price = data.bpi[currency].rate;
				priceDisp.innerHTML = price + ' ' + currency;
			}
		};		
	});*/




