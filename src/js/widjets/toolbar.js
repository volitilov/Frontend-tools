var $j = jQuery.noConflict();

$j(function() {
	var count = false;
	$j('#toolbar').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		if (count == false) {
			$j('.toolbar-menu').show();
			count = true;
		} else {
			$j('.toolbar-menu').hide();
			count = false;
		}

		return false;
	});

	$j(document).on('contextmenu', function(){
		$j('.toolbar-menu').hide();
		count = false;
	});

	$j(document).on('click', function(){
		$j('.toolbar-menu').hide();
		count = false;
	});
});