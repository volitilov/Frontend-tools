var $j = jQuery.noConflict();

$j(function() {
    $j('#popup').click(function(event) {
        event.preventDefault();

        alert('hello world');

       return false;
    });
});