var clock = $('#currentDay')

function updateClock() {
    var now = moment().format("dddd, MMMM Do YYYY, h:mm a")
    clock.text(now)
}

setInterval(updateClock, 1000)