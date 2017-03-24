var j = jQuery.noConflict();

j(function() {
	var count = true;

	// get input value 
	var input = '';
	// get textarea value
	var textarea = '';

	j('#card-small').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		if (count == false) {
			j('.data-item').css({
				width: '48%'
			});
		}

		count = true;

		return false;
	});

	j('#card-big').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		if (count == true) {
			j('.data-item').css({
				width: '100%'
			});
		}

		count = false;

		return false;
	});


	// handler ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	j('.add-content input, textarea').keyup(function(event) {

		input = String(j('.add-content input').val());
		textarea = String(j('.add-content textarea').val());


		if (input || textarea != '') {

			j(this).css({
				borderColor: ''
			});

		}
		
	});

	// add content ::::::::::::::::::::::::::::::::::::::::::::::::::::
	j('.add-content button').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		// clone object
		var item = j('.data-item:first-child').clone();

		// find h4 in object
		var name = item.find('h4');
		// find p in object
		var description = item.find('.content-description p');


		if (input == '') {
			j('.add-content input').css({
				borderColor: 'red'
			});
		}

		if (textarea == '') {
			j('.add-content textarea').css({
				borderColor: 'red'
			});
		}

		if (input && textarea != '') {
			name.text(input);
			description.text(textarea);
			j('.widjet-data').append(item);
		}

		return false;
	});


});