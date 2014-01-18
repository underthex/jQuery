
$(document).ready(function(){
    $("#formUser").on("submit", function(e){
        e.preventDefault();
        var formUser = $(this);
        $.ajax(formUser.attr("action"), {
            type: formUser,attr("method"), //or hardcode POST
            data: formUser.serialize(),
            success: function(response){
                formUser.remove();
                $("#container").html(response);
            }
        });
    });
});
