stopWatch = {
    hundreds: 0,
    secs: 0,
    mins: 0,
    interval: null,
    nrOfLaps: 0,
    start: function() {
        stopWatch.interval = setInterval(started, 10);
        $("#start").attr("disabled", "disabled");
        $("#stop").attr("disabled", false);
        $("#lap").attr("disabled", false);
        $("#reset").attr("disabled", false);
    },
    stop: function () {
        clearInterval(stopWatch.interval);
        $("#start").attr("disabled", false);
        $("#stop").attr("disabled", "disabled");
        $("#lap").attr("disabled", "disabled");
    },
    lap: function () {
        stopWatch.nrOfLaps++;
        $("#laps").append("Lap " + stopWatch.nrOfLaps + " = " + formatNumber(stopWatch.mins) + ":" + formatNumber(stopWatch.secs) + "." + formatNumber(stopWatch.hundreds) + "<br>");
        stopWatch.mins = 0;
        stopWatch.secs = 0;
        stopWatch.hundreds = 0;
    },
    reset: function() {
        stop();
        stopWatch.mins = 0;
        stopWatch.secs = 0;
        stopWatch.hundreds = 0;
        nrOfLaps = 0;
        $("#laps").text("");
        $("#time").text("");

    }
};

function started() {
    stopWatch.hundreds++;
    if (stopWatch.hundreds === 100) {
        stopWatch.hundreds = 0;
        stopWatch.secs++;
    }
    if (stopWatch.secs === 60) {
        stopWatch.secs = 0;
        stopWatch.mins++;
    }
    if (stopWatch.mins == 60)
        stopWatch.mins = 0;

    $("#time").text(formatNumber(stopWatch.mins) + ":" + formatNumber(stopWatch.secs) + "." + formatNumber(stopWatch.hundreds));
}

function formatNumber(n) {
    if (n < 10)
        return "0" + n;
    return n;
}

