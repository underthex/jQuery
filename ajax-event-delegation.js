
$(document).ready(function(){
//### This element (button) will load content to the container
    $("#btnLoad").on("click", function(){
        $.ajax("sample-content.html", {
            success: function(response){
                $("#content").html(response);
            }
        });
    });

//### This element (button) depends on an element in the loaded content inside the container
//### jQuery will keep on listening to the element whenever it exists.
    $("#btnAlert").on("click", function(){
        alert("url: " + $("#img1").attr("src"));
    });

//### This element (image) resides in the loaded content inside the container
//### jQuery will keep on listening to the element whenever it exists.
//### $("#content img").on("click", ...) will not work !!!
    $("#content").on("click", "img", function(){
        alert("url: " + $(this).attr("src"));
    });
});