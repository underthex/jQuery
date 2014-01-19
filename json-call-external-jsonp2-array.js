
$(document).ready(function(){
    $("#frmWeather").on("submit", function(e){
        e.preventDefault();
        thisForm = $(this);
        $.ajax({
            url: thisForm.attr("action"),
            type: thisForm.attr("method"),
            dataType: "json",
            data: thisForm.serialize(),
            success: function(response){
                var header = "Below is the " + response.cnt + " day(s) forecast for " + response.city.name + " (" + response.city.country + ")";
                $(".header").html(header);
                //### Using MAP method to retrieve array
                var resultElement = $.map(response.list, function(item, i){
                    var now = new Date;
                    var forecastDate = getISODateTime(new Date(now.setDate(now.getDate()+i)));
                    var listItem = $('<div class="item"></div>');
                    $('<p><strong>' + forecastDate + '</strong></p>').appendTo(listItem);
                    $('<p>' + item.weather[0].description + ' with minimum temperature of ' + item.temp.min + ' and maximum of ' + item.temp.max + ' degrees F. Wind speed is about ' + item.speed + ' MPH.</p>').appendTo(listItem);
                    return listItem; //store result into the variable resultElement
                });
                //### Inserting the resultElement into the appropriate container
                //### Here we use detach() to optimize DOM before showing it back.
                $(".container").detach().html(resultElement).appendTo("#forecast");
            },
            error: function(request, errorType, errorMessage){
                alert("Error : " + errorType + "\nMessage: " + errorMessage);
            }
        });
    });
});


//### Helper Tools Below

function getISODateTime(d){
    // padding function
    var s = function(a,b){return(1e15+a+"").slice(-b)};

    // default date parameter
    if (typeof d === 'undefined'){
        d = new Date();
    };

    var weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    // return ISO date
    return weekday[d.getDay()] + ', ' + s(d.getMonth()+1,2) + '/' + s(d.getDate(),2) + '/' + d.getFullYear();
}