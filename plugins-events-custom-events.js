
$(document).ready(function(){

    $("#container").on("click.seeMore", ".box", showMore);

    //### Event handler reference to the custom event
    $("#container").on("seeMore.All", ".box", showMore);

    $("#showAll").on("click", function(e){
        e.preventDefault();
        $(".box").trigger("seeMore.All");
        //Make sure to refer to the right element (.box)
    })

});

var showMore = function(){
    $(this).toggleClass("boxClicked");
    $(this).children("p:last").html($("<p><br>Here is some more info as placeholder inside the box.</p>"));
}
