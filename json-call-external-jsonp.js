
$(document).ready(function(){
    $.ajax({
        url: "http://api.wunderground.com/api/5e397978f83aaced/conditions/q/94404.json",
        dataType: "jsonp",
        contentType: "application/json",
        success: function(response){
            var location = response["current_observation"]["display_location"]["full"];
            var tempF = response["current_observation"]["temp_f"];
            var tempC = response["current_observation"]["temp_c"];
            var weather = response["current_observation"]["wind_string"] + " and " + response["current_observation"]["weather"];
            $("#container").html("It is a " + weather.toLowerCase() + " day here in " + location + ".<br>Current temperature is " + tempF + " degree F (" + tempC + " degree C)");
        },
        error: function(request, errorType, errorMessage){
            alert("Error : " + errorType + "\nMessage: " + errorMessage);
        }
    });
});
