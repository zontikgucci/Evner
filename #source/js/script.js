$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});



$(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		speed: 2000,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
	});
});

$(function () {
	$('.slider-one').slick({
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 1500,
	});
});