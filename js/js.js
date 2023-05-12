$(document).ready(function () {
    var jbOffset = $('#gnb').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1600) {
            $('#gnb').addClass("on");

        }
        else {
            $('#gnb').removeClass("on");

        }
    });
});