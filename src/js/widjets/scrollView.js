var $j = jQuery.noConflict();

$j(function() {
	$j('').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		

		return false;
	});
});