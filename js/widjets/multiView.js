var j = jQuery.noConflict();

j(function() {
	// помечаем номероми 'tab-control', для дальнейшей активации
	// табов по номерам
	var count = 0;
	j('.multiView-control li').each(function() {
		count ++;
		j(this).attr('data-tab-control-to', count);
	});


	// помечаем номерами 'tab-content', для активации данных окон
	// по намерам
	var count2 = 0;
	j('.multiView-content li').each(function() {
		count2 ++;
		j(this).attr('data-tab-content-to', count2);
	});


	// вешаем обработчик клика для активации нужного
	// акна таба
	j('.multiView-control a').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		// получаем значение атрибута предка для поиска
		// такого же значения в 'tab-content'
		var dataItem = j(this).parent().attr('data-tab-control-to');

		// если у радителя нет класа 'active' то добавляем, но
		// прежде находим элемент у которого уже есть класс 'active'
		// и удаляем у него данный класс
		if (!j(this).parent().hasClass('active')) {
			j('.multiView-control li').each(function() {
				if (j('.multiView-control li').hasClass('active')) {
					j('.multiView-control li').removeClass('active');
				}
			});
			j(this).parent().addClass('active');
		}

		// - перебераем табы, находим класс 'active', удаляем его
		// - если номер таба равен номеру контрола, то активируем 
		//   его путём добавления класса 'active'
		j('.multiView-content li').each(function() {
			if (j(this).find('.tab-content').hasClass('active')) {
				j(this).find('.tab-content').removeClass('active');
			}
			if (j(this).attr('data-tab-content-to') == dataItem) {
				j(this).find('.tab-content').addClass('active');
			}
		});

		// отменяем действие ссылок по умолчанию
		return false;
	});
});