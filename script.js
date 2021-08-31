var clock = $('#currentDay')
var time = moment().format("h:mm a")


function updateClock() {
    var now = moment().format("dddd, MMMM Do YYYY, h:mm a")
    clock.text(now)
}

setInterval(updateClock, 1000)

function color() {
    var now = new moment().format("h:mm a");
    var n = now.getUTCHours() + 1;
    if (n > now || n < 9) {
        // If time is after 6PM or before 9AM, apply night theme to 'body'
        $("input").addClass("future").removeClass("past");
    } else {
        // Else use ‘day’ theme
        $("input").addClass("past").removeClass("future");
    }
}
$(document).ready(function () {
    color();
});
if (input < now) {
    var now = moment().format("h:mm a")

}