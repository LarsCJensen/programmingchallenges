guessingGame = {
    lastGuess: 0,
    arrayOfValues: null,
    guess: function () {
        $("#log").text("");
        guessingGame.arrayOfValues = createArray(100);
        lastGuess = guessingGame.arrayOfValues.length / 2;
        var guessValue = getGuessValue(0, lastGuess);
        logGuess(guessValue);
    },
    
    higher: function() {
        //halve the array based on answer
        guessingGame.arrayOfValues = guessingGame.arrayOfValues.slice(lastGuess);
        lastGuess = guessingGame.arrayOfValues.length / 2;
        var guessValue = getGuessValue(0, guessingGame.arrayOfValues.length / 2);
        logGuess(guessValue);
    },

    lower: function() {
        //halve the array based on answer
        guessingGame.arrayOfValues = guessingGame.arrayOfValues.slice(0, lastGuess);
        lastGuess = guessingGame.arrayOfValues.length / 2;
        var guessValue = getGuessValue(0, guessingGame.arrayOfValues.length / 2);
        logGuess(guessValue);
    },
    
    correct: function() {
        alert("I machine have guessed correctly!");
    }
};

function createArray(n) {
    var newArray = new Array();
    for (var i = 0; i < n; i++) {
        newArray[i] = i+1;
    }
    return newArray;
}

function getGuessValue(startIndex, endIndex) {
    if (guessingGame.arrayOfValues.length === 1)
        return guessingGame.arrayOfValues[0];
    var tempArray = guessingGame.arrayOfValues.slice(startIndex, endIndex);
    return tempArray.pop();
}

function logGuess(n) {
    $("#log").append("<p>Is the value you are thinking of " + n + "?</p>");
}