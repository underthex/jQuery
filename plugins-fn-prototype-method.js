
$.fn.priceify = function(options){
    $(this).each(function(){
        //### Using the $.extend() utility method to specify default value(s)
        //### Also create a setting object to make variables look nice
        var settings = $.extend({
            procedure: $(this), //variable from DOM element. see below
            price: $(this).data('price'), //variable from DOM element. see below
            day: 30, // Default
            discount: 0.05, // Default
            location: 'San Francisco, USA' //Default
        }, options); //notice we need to pass options to overide defaults (if specified).

        //### Settings object above has overide variables below.
        //### From DOM Elements
        //var procedure = $(this);
        //var price = procedure.data('price');

        var show = function(){
            var details = $('<p>Our promotional price is $' + settings.price * (1 - settings.discount) + '</p>' +
                '<p>(' + settings.discount * 100 + '% Off. Reg $' + settings.price + ')</p>' +
                '<p>This offer will expire in '  + settings.expire + ' days.</p>' +
                '<p>Surgery will be performed in ' + settings.location + '</p>');
            $(this).hide(); //hide button
            settings.procedure.append(details);
        }

        settings.procedure.on('click.priceify', 'button', show);
        settings.procedure.on('show.priceify', 'button', show); //custom event to trigger all
    });
}
$(document).ready(function(){
    //$('.procedure').priceify();
    $('.procedure').priceify({ discount: 0.2, expire: 5, location: 'Tijuana, Mexico' });

    $('#showAll').on('click', function(e){
        e.preventDefault();
        $('.procedure').find('button').trigger('show.priceify');
    });
});
