var $j = jQuery.noConflict();

$j(function() {
	var count = false;

	// Form version ::::::::::::::::::::::::::::::::::::::::::::::
	var select = $j('#select option:selected').text();

	$j('#select').change(function() {
		var select = $j('#select option:selected').text();
		
		switch (select) {
			case 'Ex. color 1':
				$j('.round1').css({
					backgroundColor: 'rgb(2, 168, 243)'
				});
				break;
			case 'Ex. color 2':
				$j('.round1').css({
					backgroundColor: 'rgb(167, 252, 0)'
				});
				break;
				break;
			case 'Ex. color 3':
				$j('.round1').css({
					backgroundColor: 'rgb(15, 226, 184)'
				});
				break;
			default:
				$j('.round1').css({
					backgroundColor: '#ff3366'
				});
				break;
		}

	});


	// Dropdown colaps :::::::::::::::::::::::::::::::::::::::::::
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


	// Select the color of the drop-down menu ::::::::::::::::::::
	$j('.color1, .color2, .color3').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		var color = $j(this).find('i').css('color');

		$j('.round2').css({
			backgroundColor: color
		});

		$j(this).find('i').css({
			color: $j('.default-color').css('color')
		});

		$j('.default-color').css({
			color: color
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