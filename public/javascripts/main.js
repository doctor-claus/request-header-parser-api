$(document).ready(function(){
    $.getJSON("http://localhost:3000/browserinfo", (result) => {
        $("#ip").text(result.ip);
        $("#lang").text(result.language);
        $("#soft").text(result.software);
    });
});