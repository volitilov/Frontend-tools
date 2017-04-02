var j = jQuery.noConflict();

j(function() {
    // added attributes carousel-indicator ::::::::::::::::::::::
    var count = 0;
    j('.carousel-indicator li').each(function() {
        count ++;
        j(this).attr('data-slider-to', count);
    });

    // added attributes carousel-iner :::::::::::::::::::::::::::
    var count2 = 0;

    j('.carousel-inner .item').each(function() {
        count2 ++;
        j(this).attr('data-item', count2);
    });

    // added handler carousel-indicator :::::::::::::::::::::::::
    j('.carousel-indicator li').click(function() {
        var dataSlide = j(this).attr('data-slider-to');

        j('.carousel-inner .item').each(function() {
            var dataItem = j(this).attr('data-item');

            if (j(this).hasClass('active')) {
                j(this).removeClass('active');
            }

            if (dataSlide == dataItem) {
                j(this).addClass('active');
            }

        });

        if (j(this).hasClass('active')) {
            j(this).removeClass('active');
        } else {
            // statement
        }

    });
});