var $j = jQuery.noConflict();

$j(function() {
	var count = false;

	$j('.brand-info').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		if (count == false) {
			$j('.sub-menu').show();
			count = true;
		} else {
			$j('.sub-menu').hide();
			count = false;
		}

		return false;
	});
});