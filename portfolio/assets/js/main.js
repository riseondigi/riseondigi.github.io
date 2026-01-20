(function ($) {
	"use strict";
	
	
	if ($(".sticky-header").length) {
		$(".sticky-header").clone().insertAfter('.sticky-header').addClass('sticky-header--cloned');
	}


	if ($(".side-drawer__toggler").length) {
		$(".side-drawer__toggler").on("click", function (e) {
			e.preventDefault();
			$(".side-drawer__wrapper").toggleClass("expanded");
			$("body").toggleClass("locked");
		});
	}

	

	if ($(".scroll-to-target").length) {
		$(".scroll-to-target").on("click", function () {
			var target = $(this).attr("data-target");
			$("html, body").animate({
					scrollTop: $(target).offset().top,
				},
				1000
			);
			return false;
		});
	}
	
	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow", // animated element css class (default is wow)
			animateClass: "animated", // animation css class (default is animated)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}

	$(window).on("scroll", function () {
		if ($(".sticky-header--cloned").length) {
			var headerScrollPos = 130;
			var stricky = $(".sticky-header--cloned");
			if ($(window).scrollTop() > headerScrollPos) {
				stricky.addClass("sticky-fixed");
			} else if ($(this).scrollTop() <= headerScrollPos) {
				stricky.removeClass("sticky-fixed");
			}
		}
		if ($(".scroll-to-top").length) {
			var strickyScrollPos = 100;
			if ($(window).scrollTop() > strickyScrollPos) {
				$(".scroll-to-top").fadeIn(500);
			} else if ($(this).scrollTop() <= strickyScrollPos) {
				$(".scroll-to-top").fadeOut(500);
			}
		}

	});

	$(window).on("load", function () {
		if ($(".preloader").length) {
			$(".preloader").fadeOut();
		}
		projectMasonaryLayout();
	});

})(jQuery);