var $j = jQuery.noConflict();

$j(function() {
	var count = true;
	var count2 = false;

	// show/hide sidebar menu :::::::::::::::::::::::
	$j('#sidebar').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		if(count == false) {
			$j('.sidebar-menu').css({
				width: '25%'
			});
			$j('.px, .x').show();
			$j('.sidebar-body').css({
				width: '75%'
			});

			count = true;
			
		} else {
			$j('.px, .x').hide();
			$j('.dop-menu').hide();
			$j('.sidebar-menu').css({
				width: '6.5%'
			});
			$j('.sidebar-body').css({
				width: '93.5%'
			});

			count = false;
			count2 = false
		}

		return false;
	});

	// show/hide sub-menu :::::::::::::::::::::::::::
	$j('.menu-item').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		if(count) {
			if(count2) {
				$j(this).find('.dop-menu').hide();
				count2 = false
			} else {
				$j(this).find('.dop-menu').show();
				count2 = true;
			};
		};
		
		return false;
	});

});