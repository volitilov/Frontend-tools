var $j = jQuery.noConflict();

$j(function() {
	$j("#datepicker, #datepicker2").datepicker({
		changeMonth: true,
		changeYear: true
	});
});