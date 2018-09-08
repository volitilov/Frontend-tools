var $j = jQuery.noConflict();

$j(function() {
	$j('.search > input').keyup(function(event) {

		var y = String($j(this).val());

		$j('.list li').each(function(index) {
			var x = $j(this).text();

			if (x.indexOf(y) == -1) {
				$j(this).hide();
			}

			if (y == '' || x.indexOf(y) != -1) {
				$j(this).show();
			}

		});

	});
});