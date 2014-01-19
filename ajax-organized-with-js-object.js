
var myClickEvents = {
    //### Event Handler section
    init: function(){
        $("#btnLoad").on("click", this.loadContainer);
        $("#btnAlert").on("click", this.showFirstImgAttr);
        $("#content").on("click", "img", this.clickImgInsideContainer);
    },
    //### Helper Method section
    loadContainer: function(){
        $.ajax("sample-content.html", {
            success: function(response){
                $("#content").html(response);
            }
        });
    },
    showFirstImgAttr: function(){
        alert("url: " + $("#img1").attr("src"));
    },
    clickImgInsideContainer: function(){
        alert("url: " + $(this).attr("src"));
    }
}

$(document).ready(function(){
    myClickEvents.init();
});


//### Above is the organized version of code below:
//### (ajax-event-delegation.html)
/*
 $("#btnLoad").on("click", function(){
 $.ajax("sample-content.html", {
 success: function(response){
 $("#content").html(response);
 }
 });
 });


 $("#btnAlert").on("click", function(){
 alert("url: " + $("#img1").attr("src"));
 });

 $("#content").on("click", "img", function(){
 alert("url: " + $(this).attr("src"));
 });
 */
