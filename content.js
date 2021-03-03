/**since jQuery document ready is not working  here */
document.addEventListener('DOMContentLoaded', function(){
    $('button').bind('click', function() { copyText($(this).attr("stat")) });
    DisplayCurrentTime();
}, false);

function DisplayCurrentTime() {
    var date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    time = hours + "" + minutes
    var textInOut = time > 1300 ? 'Signed out: ' : 'Signed in: ';
    $("#input").val( textInOut + time );
    return time;
};

function copyText(stat) {
    var time = DisplayCurrentTime();

    $("#input").val( 'Signed '+ stat +': ' + time );
    $("#input").select().focus();

    /* Copy text bitch */
    document.execCommand("copy");

    /** one pop 2k */
    popupWindow( $('#linkId123').attr('href'))
}

function popupWindow(url) {
    var w = 1100;
    var h = 800;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var win = window.open(url, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    win.focus();
}