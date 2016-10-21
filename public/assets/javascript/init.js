(function($) {
    $(function() {
    	//sidenav bar
        $('.button-collapse').sideNav();

        //fixed position contact info below nav bar
        function makeSticky(){
			var window2 = $(window)
			var header = $('.scrolling-contact-info')

			window2.scroll(function(){
				if (window2.scrollTop() > 0 ){
					header.slideDown(200);
				} 
			});
		}

		$(function(){
			makeSticky();
		});

		$(".animsition").animsition({
    inClass: 'fade-in-left',   // in and out directions
    outClass: 'fade-out-left',
    inDuration: 700,	//in and out durations in miliseconds
    outDuration: 400,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
    }); // end of document ready
})(jQuery); // end of jQuery name space


