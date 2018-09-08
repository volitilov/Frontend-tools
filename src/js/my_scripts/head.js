var $j = jQuery.noConflict();

$j(function() {
	$j('.navbar-right a').click(function(event) {
		event = event || window.event;

		$j(this).css({
			backgroundColor: '#ddd'
		});;
		
	});
});