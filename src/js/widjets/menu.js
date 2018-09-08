var $j = jQuery.noConflict();

$j(function() {
	var count = false;

	$j('.brand-info, .brand-info1').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		if (count == false) {
			$j(this).next().show();
			count = true;
		} else {
			$j(this).next().hide();
			count = false;
		}

		return false;
	});
});