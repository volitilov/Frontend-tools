var j = jQuery.noConflict();

j(function() {
    var count = true;

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


    // remove item ::::::::::::::::::::::::::::::::::::::::::::::::::::
    var list_select_item = [0,];

    // add handler
    j('.data-item').click(function(event) {
        event = event || window.event;
        event.preventDefault();

        j(this).css({
            borderColor: 'rgb(66, 133, 244)'
        });

        var id_item = list_select_item.length + 1;
        var item = j(this).attr('id', id_item);
        list_select_item.push(item);

        return false;
    });

    list_select_item[0] = j('.data-item:first-child').clone(true);

    j('.remove-content a').click(function(event) {
        event = event || window.event;
        event.preventDefault();

        for (var i = 0; i < list_select_item.length; i++) {
            if (list_select_item[i] != 0) {
                j('.widjet-data').find(list_select_item[i]).remove();
            }
        }
        list_select_item.length = 1;

        return false;
    });

    // handler ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // get input value
    var input = '';
    // get textarea value
    var textarea = '';

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
        var item = list_select_item[0].clone(true);
        // find h4 in object
        var name = item.find('h4');
        // find p in object
        var description = item.find('.content-description p');

        item.removeAttr('id');
        item.css({
            borderColor: ''
        });


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