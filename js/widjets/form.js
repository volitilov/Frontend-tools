var $j = jQuery.noConflict();

$j(function() {
	$j('#radio-1, #radio-2').click(function(){
		$j('input:radio:checked').prop('checked', false);
		$j(this).prop('checked', true);
	});
});