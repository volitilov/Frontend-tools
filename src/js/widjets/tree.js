var j = jQuery.noConflict();

j(function() {
    j('.widjet-tree .dropdown > a').click(function(event) {
        event = event || window.event;
        event.preventDefault();

        var togle = j(this).next();

        if (togle.css('display') == 'block') {
            j(this).find('span:first').css({
                transform: 'rotate(0deg)'
            });
            togle.hide();
        } else {
            j(this).find('span:first').css({
                transform: ''
            });
            togle.show();
        }

        return false;
    });

});