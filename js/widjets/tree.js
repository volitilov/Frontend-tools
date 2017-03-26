var j = jQuery.noConflict();

j(function() {
    var count = true;

    j('.tree .dropdown').click(function(event) {
        event = event || window.event;
        event.preventDefault();

        if (count == true) {
            j(this).next('.dropdown-togle').hide();
            count = false;
        } else {
            j(this).next('.dropdown-togle').show();
            count = true;
        }

        return false;
    });

});