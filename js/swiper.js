var swiper = new Swiper(".home-slider", {
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
	  delay: 7500,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	loop: true,
 });