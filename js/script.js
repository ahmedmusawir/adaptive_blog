jQuery(document).ready(function($) {
	jQuery('#rwd-top-nav-btn').click(function(event){
		event.preventDefault();
		jQuery('.rwd-top-nav').slideToggle();
	});

	jQuery('#rwd-main-nav-btn').click(function(event){
		event.preventDefault();
		jQuery('.rwd-main-nav').slideToggle();
	});
});