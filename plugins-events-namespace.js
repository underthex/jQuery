
function checkingAllBoxes(){
    var button1 = $("#button1"); var text1 = $("#text1"); var text2 = $("#text2"); var text3 = $("#text3");var check0 = $("#check0"); var check1 = $("#check1"); var check2 = $("#check2"); var check3 = $("#check3"); var check4 = $("#check4"); var check5 = $("#check5"); var check6 = $("#check6"); var check7 = $("#check7");

    button1.on("click.button", function(){ $(this).val("Clicked!")});
    button1.on("click.text.1", addText1);
    button1.on("click.text.2", addText2);
    button1.on("click.text.3", addText3);
    button1.on("click.check", removeCheckboxes);
    button1.on("mouseenter.text", addBGonTextboxes);
    button1.on("mouseout.text", removeBGonTextboxes);

    if(check0.prop("checked")){
        button1.off("click");
    }
    else if(check1.prop("checked")){
        button1.off("click.button");
    }
    else if(check2.prop("checked")){
        button1.off("click.text.1");
    }
    else if(check3.prop("checked")){
        button1.off("click.text.2");
    }
    else if(check4.prop("checked")){
        button1.off("click.text.3");
    }
    else if(check5.prop("checked")){
        button1.off("click.check");
    }
    else if(check6.prop("checked")){
        button1.off(".text");
    }
    else if(check7.prop("checked")){
        button1.off(".text.1").off(".text.2");
    }
}

$(document).ready(function(){

    checkingAllBoxes()

    $(".check").on("change.checkbox", function(){
        checkingAllBoxes();
    });
});

function addText1(){ $("#text1").val("Generated by addText1 function"); }
function addText2(){ $("#text2").val("Generated by addText2 function"); }
function addText3(){ $("#text3").val("Generated by addText3 function"); }
function removeCheckboxes(){ $("body").css("color", "Red"); }
function addBGonTextboxes(){ $(".text").addClass("bg"); }
function removeBGonTextboxes(){ $(".text").removeClass("bg"); }
