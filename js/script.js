setInterval(currentTime, 1000);
const currentDay = $('#currentDay');
const currentDate = $('<div>');

function currentTime() {
    currentDate.text(moment().format('dddd' + ', ' + 'MMMM D, YYYY'));
    currentDay.append(currentDate);
}

currentTime();

function liveTime() {
    const today = new Date();
    const currentHour = today.getHours();

    for (let i = 8; i < 18; i++) {
        if (i == currentHour) {
            document.getElementById("hour" + i).classList.add("present");
            // $("#hour" + i).addClass("present")
        } else if (i < currentHour) {
            document.getElementById("hour" + i).classList.add("past");
        } else if (i > currentHour) {
            document.getElementById("hour" + i).classList.add("future");
        }
    }
}

let events = [];

function loggedEvents() {
    liveTime();

    events = retrieveFromStorage("localStorageEvent");
    if (events === null) {
        events = {};
        sendToStorage("localStorageEvent", events);
    }
    if (events.hasOwnProperty("hour8")) {
        document.getElementById("hour8").value = events.hour8;
    }
    if (events.hasOwnProperty("hour9")) {
        document.getElementById("hour9").value = events.hour9;
    }
    if (events.hasOwnProperty("hour10")) {
        document.getElementById("hour10").value = events.hour10;
    }
    if (events.hasOwnProperty("hour11")) {
        document.getElementById("hour11").value = events.hour11;
    }
    if (events.hasOwnProperty("hour12")) {
        document.getElementById("hour12").value = events.hour12;
    }
    if (events.hasOwnProperty("hour13")) {
        document.getElementById("hour13").value = events.hour13;
    }
    if (events.hasOwnProperty("hour14")) {
        document.getElementById("hour14").value = events.hour14;
    }
    if (events.hasOwnProperty("hour15")) {
        document.getElementById("hour15").value = events.hour15;
    }
    if (events.hasOwnProperty("hour16")) {
        document.getElementById("hour16").value = events.hour16;
    }
    if (events.hasOwnProperty("hour17")) {
        document.getElementById("hour17").value = events.hour17;
    }
}

function saveEvent(key, value) {
    events[key] = value;
    alert("Event Added!")
    sendToStorage("localStorageEvent", events);
}

function sendToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function retrieveFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}