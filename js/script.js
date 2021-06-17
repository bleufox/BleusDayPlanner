const currentDay = $('#currentDay');
// Variable currentDay is equal to document.getElementById('currentDay'). Above variable uses jQuery to communicate the same thing.

const currentDate = $('<div>');
// Couldn't figure out how to translate the above into vanilla JS

setInterval(currentTime, 1000);
//setInterval (used to evaluate an expression at specified intervals, in this case 1000 milliseconds = 1 second at a time) is invoking the currentTime function which displays the current date using moment library which displays the time and date in various human-readable formats.

function currentTime() {
    currentDate.text(moment().format('MMMM Do, YYYY h:mm:ss a'));
    currentDay.append(currentDate);
}

// Function currentTime 

currentTime();

function liveTime() {
    const today = new Date();
    const currentHour = today.getHours();

    for (let i = 8; i < 18; i++) {
        if (i == currentHour) {
            document.getElementById("hour" + i).classList.add("present");
        } else if (i < currentHour) {
            document.getElementById("hour" + i).classList.add("past");
        } else if (i > currentHour) {
            document.getElementById("hour" + i).classList.add("future");
        }
    }
}

let events

function storedEvents() {
    liveTime();
    
    events = retrieveFromStorage("storage");
    if (events === null) {
        events = {};
        sendToStorage("storage", events);
    }
    console.log(events);
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

function retrieveFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveEvent(key, value) {
    events[key] = value;
    alert("Event Successfully Added!")
    sendToStorage("storage", events);
}

function sendToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}