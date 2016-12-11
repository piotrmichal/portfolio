$(function() {

	var $nav = $('nav');
	var $link = $('li a');
	var $more = $('#banner a');
	var $menuIcon = $('.hamburger');
	var $window = $(window);
	var navHeight = $nav.outerHeight();

	function smoothScroll(e) {
		e.preventDefault();
		var elem = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(elem).offset().top
		}, 500, 'swing');
	}

	$more.add($link).on('click', smoothScroll);

	$window.on('scroll', function() {
		var $scrollPos = $window.scrollTop();

		var $section = $('section');
		$('header').add($section).each(function() {
			var $this = $(this);
			if($this.offset().top < ($scrollPos + navHeight) && 
				($scrollPos + navHeight) < ($this.offset().top + $this.outerHeight())) {
				var targetClass = '.' + $this.attr('id');
				$link.removeClass('active');
				$(targetClass).addClass('active');
			};
		});
	});

	$menuIcon.on('click', function() {
		$(this).next().toggleClass('open');
	})
});