(function($) {
    $(function() {

        $('.button-collapse').sideNav();
          	function makeSticky(){
			var window2 = $(window)
			var header = $('.scrolling-contact-info')

			window2.scroll(function(){
				if (window2.scrollTop() > 0 ){
					//header.attr("hidden", "True");
					header.slideDown(200);
				} 
			});
		}

$(function(){
	makeSticky();
});
    }); // end of document ready
})(jQuery); // end of jQuery name space


