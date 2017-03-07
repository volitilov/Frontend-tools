var $j = jQuery.noConflict();

$j(function() {
	$j('i').each(function(index, el) {
		title = $j(this).text();
		$j(this).parent().attr('title', title);		
	});
});