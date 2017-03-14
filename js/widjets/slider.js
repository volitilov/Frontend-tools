var $j = jQuery.noConflict();

$j(function() {
	var handle = $j(".ui-slider-handle");

	// slider1 ::::::::::::::::::::::::::::::::::::::::::::::
	$j(".slider").slider({
		value: 10,
		orientation: "horizontal",
		range: "min",
		animate: true
	});

	// slider2 ::::::::::::::::::::::::::::::::::::::::::::::
	$j(".slider2").slider({
		value: 30,
		orientation: "horizontal",
		range: "min",
		animate: true,
		create: function() {
			handle.text($j(this).slider("value"));
		},
		slide: function(event, ui) {
			handle.text(ui.value);
		}
	});

	// slider3 ::::::::::::::::::::::::::::::::::::::::::::::
	$j(".slider3 * li").each(function() {
		var value = $j(this).attr('value');
      
		$j(this).slider({
			value: value,
			range: "min",
			animate: true,
			orientation: "vertical"
		});
	});

	// slider4 ::::::::::::::::::::::::::::::::::::::::::::::
	$j("#slider-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function(event, ui) {
			$j("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
    
	$j("#amount").val("$" + $j("#slider-range").slider("values", 0) + 
		" - $" + $j("#slider-range").slider("values", 1));

	// slider5 ::::::::::::::::::::::::::::::::::::::::::::::
	var select = $j("#minbeds");
	$j(".ex-slider").slider({
		min: 1,
		max: 6,
		range: "min",
		value: select[0].selectedIndex + 1,
		slide: function(event, ui) {
			select[0].selectedIndex = ui.value - 1;
		}
	});
	
	$j(select).change(function(event) {
		event = event || window.event;
		event.preventDefault();

		$j(".ex-slider").slider("value", this.selectedIndex + 1);

		return false;
	});
});