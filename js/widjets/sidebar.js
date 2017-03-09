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
			$j('.sidebar-menu').css({
				width: '21%'
			});
			$j('span').show();
		}

		return false;
	});
	$j('.sidebar-menu').mouseover(function(event) {
		event.preventDefault();
		$j(this).css({
			width: '21%'
		});
		$j('span').show();

		return false;
	});

	$j('.sidebar-menu').mouseout(function(event) {
		event.preventDefault();
		$j('span').hide();
		$j(this).css({
			width: '6%'
		});

		return false;
	});

});