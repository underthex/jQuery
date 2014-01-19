
$(document).ready(function(){

    var qryString = "name";
    alert(qryString + ": " + getQueryStringParams(qryString) + "\nhashtag: " + getHashtag());




    function getQueryStringParams(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++){
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }

    function getHashtag(){
        return window.location.hash.substring(1);
    }

});