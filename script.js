window.onload = function() {

    // DOM elements for time display and watch buttons!
    var seconds  = document.querySelector("#sec");
    var minutes  = document.querySelector("#min");
    var hours    = document.querySelector("#hour");

    var startBtn = document.querySelector("#start");
    var stopBtn  = document.querySelector("#stop");
    var resetBtn = document.querySelector("#reset");

    // Variable to store the interval ID for time updates!
    var interval;

    // Initialize variables for tracking time values!
    var secondsValue = 0;
    var minutesValue = 0;
    var hourValue    = 0;

    // Initialize displayed time values!
    seconds.innerHTML = ":00";
    minutes.innerHTML = ":00";
    hours.innerHTML   = "00";

    // Event handler for the start button!
    startBtn.onclick = function() {
        // Clear any existing interval!
        clearInterval(interval);

        // Start updating time every second!
        interval = setInterval(start, 1000);
    }

    // Event handler for the stop button!
    stopBtn.onclick = function() {
        // Stop the time update interval!
        clearInterval(interval);
    }

    // Event handler for the reset button!
    resetBtn.onclick = function() {
        // Stop the time update interval!
        clearInterval(interval);

        // Reset time values to zero!
        secondsValue = 0;
        minutesValue = 0;
        hourValue    = 0;

        seconds.innerHTML = ":00";
        minutes.innerHTML = ":00";
        hours.innerHTML   = "00";
    }

    // Function to update the time values!
    function start() {
        secondsValue++;

          // Update seconds display!
        if (secondsValue < 10) {
            seconds.innerHTML = ":0" + secondsValue;
        } else {
            seconds.innerHTML = ":" + secondsValue;
        }

         // Update minutes display!
        if (secondsValue > 59) {
            minutesValue++;
            secondsValue = 0;

            if (minutesValue < 10) {
                minutes.innerHTML = ":0" + minutesValue;
            } else {
                minutes.innerHTML = ":" + minutesValue;
            }
        }

        // Update hours display!
        if (minutesValue > 59) {
            hourValue++;
            minutesValue = 0;

            if (hourValue < 10) {
                hours.innerHTML = "0" + hourValue;
            } else {
                hours.innerHTML = hourValue;
            }
        }
    }
}