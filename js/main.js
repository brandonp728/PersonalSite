var clicked = 0, name;

$(function() {
    $("#testBtn").click(function() {
        if(clicked == 0) {
            $("#toHide").hide();
            clicked = 1;
        }
        else {
            $("#toHide").show();
            var lastText = $("#toHide").text();
            $("#toHide").html(lastText + " is gay " + name);
            clicked = 0;
        }
    });
});