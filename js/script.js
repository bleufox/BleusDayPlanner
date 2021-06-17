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

// Function currentTime retireves the current date in the specified format and appends the currentDate variable to the currentDay variable which is document.getElementById('currentDay) to the DOM element with the corresponding Id.

currentTime();
// Calls the function currentTime

function liveTime() {
    const today = new Date();
    // Variable today generates a new date every time the liveTime function is invoked.

    const currentHour = today.getHours();
    // Variable currentHour returs the hour according to local time.

    for (let i = 8; i < 18; i++) {
        if (i === currentHour) {
            document.getElementById("hour" + i).classList.add("present");
            // Compares i to the currentHour variable and, if true, adds class 'present' to the dom element and applies the appropriate CSS.

        } else if (i < currentHour) {
            document.getElementById("hour" + i).classList.add("past");
            // Compares i to the currentHour variable and, if true, adds class 'past' to the dom element and applies the appropriate CSS.

        } else if (i > currentHour) {
            document.getElementById("hour" + i).classList.add("future");
        }
        // Compares i to the currentHour variable and, if true, adds class 'future' to the dom element and applies the appropriate CSS.
    }
    // The for loop sets the variable i to 8 and runs the following if and else if statements until it reaches 18.
}

// The liveTime function keeps the current time, compares the currentHour variable against the index and adds a class (past, present future) if the criteria is met in any of the three arguments in the else if functions. If the variable meets any of the three arguments, the appropriate CSS properties associated with .present, .past, .future are applied.

let events
// Declares variable events for use in the storedEvents and saveEvents functions

function savedEvents() {
    liveTime();
    // Calls liveTime function

    events = getFromStorage("storage");
    // events is declared as the function getFromStorage and provides a key for the saveToStorage function.

    if (events === null) {
        // if events is equal to null, create an empty object.
        events = {};
        saveToStorage("storage", events);
        // Calls saveToStorage function which uses the "storage" key and inserts the events as the value to save to local storage.
    }

    // All if statements below take the .hasOwnProperty function which creates a boolean by comparing the specified id against hard code (ex: "hour8"). If the boolean is true, then the user input is added to the events empty object for that hour.

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

function saveEvent(key, userEntry) {
    events[key] = userEntry;
    saveToStorage("storage", events);
}
// saveEvent function takes the key and userEntry parameters and redeclares events variable as the parameters as key = userEntry, then invokes the saveToStorage function which uses the hard code "storage" as the key and the newly declared events variable as the "value".

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, userEntry) {
    localStorage.setItem(key, JSON.stringify(userEntry));
}