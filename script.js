window.onload = function() {

    var seconds  = document.querySelector("#sec");
    var minutes  = document.querySelector("#min");
    var hours    = document.querySelector("#hour");
    var startBtn = document.querySelector("#start");
    var stopBtn  = document.querySelector("#stop");
    var resetBtn = document.querySelector("#reset");

    var interval;

    var secondsValue = 0;
    var minutesValue = 0;
    var hourValue    = 0;

    seconds.innerHTML = ":00";
    minutes.innerHTML = ":00";
    hours.innerHTML   = "00";

    startBtn.onclick = function() {
        clearInterval(interval);
        interval = setInterval(start, 1000);
    }

    stopBtn.onclick = function() {
        clearInterval(interval);
    }

    resetBtn.onclick = function() {
        clearInterval(interval);
        secondsValue = 0;
        minutesValue = 0;
        hourValue    = 0;

        seconds.innerHTML = ":00";
        minutes.innerHTML = ":00";
        hours.innerHTML   = "00";
    }

    function start() {
        secondsValue++;

        if (secondsValue < 10) {
            seconds.innerHTML = ":0" + secondsValue;
        } else {
            seconds.innerHTML = ":" + secondsValue;
        }

        if (secondsValue > 59) {
            minutesValue++;
            secondsValue = 0;

            if (minutesValue < 10) {
                minutes.innerHTML = ":0" + minutesValue;
            } else {
                minutes.innerHTML = ":" + minutesValue;
            }
        }

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