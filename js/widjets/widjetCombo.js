var $j = jQuery.noConflict();

$j(function() {
	var count = false;

	// Dropdown colaps :::::::::::::::::::::::::::::::::
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


		// $j('.default-color').css({
		// 	color: 'rgb(15, 226, 184)'
		// });

		// $j('.color1 i').css({
		// 	color: 'rgb(167, 252, 0)'
		// });

	// Select the color of the drop-down menu ::::::::::::::::::::
	$j('.color1, .color2, .color3').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		var color = $j(this).find('i').css('color');

		$j('.round2').css({
			transition: '1s',
			backgroundColor: color
		});

		return false;
	});
});

// ColorPicker version ::::::::::::::::::::::::
function changeColorRound(jscolor) {
	$j('.round3').css({
		backgroundColor: '#' + jscolor
	});
	$j('.c-p-round').css({
		color: '#' + jscolor
	});
}