var j = jQuery.noConflict();

j(function() {
	// вешаем обработчик клика для активации нужного
	// акна аккардиона
	j('.accordion-controll').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		// проверяю активный данный блок или нет:
		// - если активный, то делаю его неактивным, 
		// 	 также меняю состояние иконки на неактивное; 
		if (j(this).parent().hasClass('active')) {
			j(this).parent().removeClass('active');
			j(this).find('i').text('expand_more');

		// - если не активный, то предворитильно нахажу
		//   активный и делаю его неактивным, затем активирую
		//   необходимый блок
		} else {
			j('.accordion-item').each(function() {
				if (j(this).hasClass('active')) {
					j(this).removeClass('active');
					j(this).find('i').text('expand_more');
				}
			})
			j(this).parent().addClass('active');
			j(this).find('i').text('expand_less');
		}

		// отменяем действие ссылок по умолчанию
		return false;
	});
});