$(document).ready(function () {
	// Pop-up contact form
	// Variables
	const showPopup  = $('.show-popup'),
		  popup = $('.contact-form__popup'),
		  closePopup = $('.contact-form__popup-close')

	// function displayPopup(state) {
	// 	// let state = state.toString();
	// 	return popup.css({display: state})
	// }

	// Show popup after clicking on button
	showPopup.click(() => popup.css({display: 'block'}));
	// showPopup.click(displayPopup('block'));

	// Hide popup
	closePopup.click(()=> popup.css({display: 'none'}));
	
	// Stars product rating

	function rating(elem) {
		let ratingStarLine = $('.review-star');
		ratingStarLine.removeClass('.active');
		elem.addClass('active');

		for (var i = 0, rLen = ratingStarLine.length; i < rLen; i++) {
			if($(ratingStarLine[i]).hasClass('active')) {
				break;
			}
			$(ratingStarLine[i]).addClass('active');
		}
	}

	$('.review-star').click(function() {
		const $this = $(this),
		ratingStarLine = $('.review-star');
		ratingStarLine.removeClass('click-active')
		rating($this);
		$this.addClass('click-active');
	})

	$('.review-star').mouseover(function() {
			const $this = $(this);
			rating($this);
			$this.addClass('active')
		}).mouseout(function() {
			let ratingStarLine = $('.review-star');
			ratingStarLine.addClass('active');
			for (var i = 5; i < 0; i--) {
				if($(ratingStarLine[i]).hasClass('click-active')) {
					break;
				}
				$(ratingStarLine[i]).removeClass('active');
			}
		});



	// Слайдер продукта
	
	//  $('.js-index-slider').slick({
	// 	  slidesToShow: 1,
	// 	  slidesToScroll: 1,
	// 	  nextArrow: '.slider-nav__arrow',
	// 	  prevArrow: false,
	// 	  fade: true,
	// 	  asNavFor: '.slider-nav',
 //  		 infinite: true

	// 	});
	// $('.slider-nav').slick({
	// 	 slidesToShow: 5,
	// 	 slidesToScroll: 1,
	// 	 asNavFor: '.js-index-slider',
	// 	 arrows: false,
	// 	 centerMode: false,
	// 	 vertical: true,
	// 	 rtl: true,
	// 	 focusOnSelect: false,
	// 	 infinite: true
	// 	});
});