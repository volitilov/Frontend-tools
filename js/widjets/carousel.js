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
    var items = [];

    j('.carousel-inner .item').each(function() {
        count2 ++;
        j(this).attr('data-item', count2);
        items.push(j(this));
    });

    // added handler carousel-indicator :::::::::::::::::::::::::
    j('.carousel-indicator li').click(function() {
        var dataSlide = j(this).attr('data-slider-to');

            for(var i = 0; i < items.length; i++) {
                var dataItem = j(i).attr('data-item');

                if (dataSlide == dataItem) {
                    j(this).show();
                } else {
                    // statement
                }
            }
    });
});