
$(document).ready(function(){
    //### LOAD()
    $("#btn0").on("click", function(){
        console.log($(this).data("name"));
        var name1 = encodeURIComponent($(this).data("name")); //won't work without encodeURIComponent
        $("#container").load("test-content.aspx?name=" + name1);
    });

    //### $.AJAX
    $("#btn1").on("click", function(){
        console.log($("#btn1").data("name"));
        $.ajax("test-content.aspx",{
            success: function(response){
                $("#container").html(response).show();
            },
            data:{"name" : $("#btn1").data("name")},
            //Cannot use $(this) for the button because AJAX-call changes the structure
            error: function(request, errorType, errorMessage){
                alert("Error: " + errorType + " with error message: " + errorMessage);
            },
            timeout: 3000, //in milisecond and then call error (above)
            beforeSend: function(){ $("#container").html("Loading ..."); }, // before ajax command fires off, set the loading animation/spinner here
            complete: function(){ $("#container").append("Loading Complete") }, //run after success or after error (the very last thing). Good place to turn off the loading img/animation/spinner.
        })
    });

    //### $.GET
    $("#btn2").on("click", function(){
        console.log($("#btn2").data("name"));
        $.get("test-content.aspx?name=" + $("#btn2").data("name"), function(response){
            $("#container").html(response).show();
        })
    });

});
