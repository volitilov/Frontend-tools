var $j = jQuery.noConflict();

$j(function() {
	var count = 0;
	$j('#sidebar').click(function(event) {
		event.preventDefault();
		count ++;

		if(count % 2 == 0) {
			$j('.sidebar-menu').css({
				width: '25%'
			});
			$j('.px, .x').show();
			
		} else {
			$j('.px, .x').hide();
			$j('.sidebar-menu').css({
				width: '6%'
			});
		}

		return false;
	});

});