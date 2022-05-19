const logo = document.querySelector(".logo");
const buketButton = document.querySelector(".menu-buket");
const otzyvButton = document.querySelector(".menu-otzyv");
const dostavkaButton = document.querySelector(".menu-dostavka");
const kontaktyButton = document.querySelector(".menu-kontakty");
const popupButton = document.querySelector(".main-section-button");
//const  = document.querySelector(".");
const twitterButton = document.getElementById('twitter');
const pinButton = document.getElementById('pin');
const youtubeButton = document.getElementById('youtube');
const facebookButton = document.getElementById('facebook');

const closeButton = document.getElementById('close-button'); 

const popup = document.querySelector(".popup");
const popupBright = document.querySelector(".popup-brightness");

const formName = document.querySelector('.input-name');
const formNumber = document.querySelector('.input-number');

const popupSendButton = document.querySelector('.popup-send-button')

buketButton.addEventListener("click", ()=> {
	window.location.href = '/buket';
}
)
otzyvButton.addEventListener("click", ()=> {
	window.location.href = '/otzyv';
}
)
dostavkaButton.addEventListener("click", ()=> {
	window.location.href = '/dostavka';
}
)
kontaktyButton.addEventListener("click", ()=> {
	window.location.href = '/kontakty';
}
)
logo.addEventListener("click", ()=> {
	window.location.href = 'index.html';
}
)
twitterButton.addEventListener("click", ()=> {
	window.location.href = 'https://en.wikipedia.org/wiki/Twitter';
}
)
pinButton.addEventListener("click", ()=> {
	window.location.href = 'https://pinterest.com/';
}
)
youtubeButton.addEventListener("click", ()=> {
	window.location.href = 'https://youtube.com/';
}
)
facebookButton.addEventListener("click", ()=> {
	window.location.href = 'https://en.wikipedia.org/wiki/Facebook';
}
)

popupButton.addEventListener("click", ()=> {
	popup.style.visibility = "visible";
	popupBright.style.visibility = "visible";

}
)

closeButton.addEventListener("click", ()=> {
	popup.style.visibility = "hidden";
	popupBright.style.visibility = "hidden";
}
)

popupBright.addEventListener("click", ()=> {
	popup.style.visibility = "hidden";
	popupBright.style.visibility = "hidden";
}
)

popupSendButton.addEventListener('click', ()=> {

if (formNumber.value == "") {
		formNumber.style.border = "2px solid red";
	}
	else {

		setTimeout(()=>{
			popup.style.visibility = "hidden";
			popupBright.style.visibility = "hidden";
		}, 1000)
	}

}
)