$(document).ready(function(){
    $.getJSON("https://req-head-parser-api.herokuapp.com/browserinfo", (result) => {
        $("#ip").text(result.ip);
        $("#lang").text(result.language);
        $("#soft").text(result.software);
    });
});