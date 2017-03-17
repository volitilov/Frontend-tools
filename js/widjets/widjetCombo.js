var $j = jQuery.noConflict();

$j(function() {
	var count = false;

	$j('.dropdown').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		if (count == false) {
			$j('.dropdown-togle').show();
			count = true;
		} else {
			$j('.dropdown-togle').hide();
			count = false;
		}

		return false;
	});
});