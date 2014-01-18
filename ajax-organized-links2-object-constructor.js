
function Container(elContainer){
    //### Helper Method section
    var thisContainer = this; //need to declare this here because "this" is changed after ajax call
    this.loadContainer = function(images){
        $.ajax("test-content.aspx", {
            success: function(response){
                elContainer.html(response).addClass("containerOpen");
            },
            data:{
                "name": images,
                "images": images
            }
            // beforeSend: function(){ $("#container").html("Loading ..."); }, // before ajax command fires off, set the loading animation/spinner here
            // 			complete: function(){ $("#container").append("Loading Complete") }, //run after success or after error (the very last thing). Good place to turn off the loading img/animation/spinner.
        })
    };
    //### Event Handler Section
    elContainer.on("click", function(){
        thisContainer.loadContainer(elContainer.data("images"));
    });
    elContainer.on("click", "img", function(){
        alert("id: " + $(this).attr("id") + "\nURL: " + $(this).attr("src"));
        return false;
    });
}

$(document).ready(function(){
    //### Make sure to pass jQuery element, NOT only the id/class name.
    var animalsContainer = new Container($("#container1"));
    var sportsContainer = new Container($("#container2"));
    var natureContainer = new Container($("#container3"));
    var peopleContainer = new Container($("#container4"));
    var cityContainer = new Container($("#container5"));
    var transportContainer = new Container($("#container6"));

    //### Top navigation (can be hard coded, but less code is better)
    $("#navbar").on("click", "li", function(){
        var thisContainer = eval($(this).data("images") + "Container");
        thisContainer.loadContainer($(this).data("images"));
    });


});
