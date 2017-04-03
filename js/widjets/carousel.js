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

        // get item :::::::::::::::
        j('.carousel-inner .item').each(function() {
            var dataItem = j(this).attr('data-item');

            if (j(this).hasClass('active')) {
                j(this).removeClass('active');
            }

            if (dataSlide == dataItem) {
                j(this).addClass('active');
            }

        });

        // get indicator :::::::::
        j('.carousel-indicator li').each(function() {
            if (j(this).hasClass('active')) {
                j(this).removeClass('active');
            }
        });

        j(this).addClass('active');

    });

    // added handler next/prev button :::::::::::::::::::::::::::
    j('.carousel .left, .right').click(function(event) {
        event = event || window.event;
        event.preventDefault();

        if (j(this).hasClass('left')) {
            j('.carousel-inner .item').prev();
        } else {
            j('.carousel-inner .item').next();
        }

        return false;
    });
});
