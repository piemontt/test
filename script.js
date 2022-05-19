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
	window.location.href = 'homepage-url';
}
)