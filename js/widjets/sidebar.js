var $j = jQuery.noConflict();

$j(function() {
	var count = 0;
	$j('#sidebar').click(function(event) {
		event.preventDefault();
		count ++;
		
		if(count % 2 == 0) {
			$j('span').hide();
			$j('.sidebar-menu').css({
				width: '6%'
			});
		} else {
			$j('span').show();
			$j('.sidebar-menu').css({
				width: '18%'
			});
		}

		return false;
	});
});