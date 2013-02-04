cipher = {
    unscrambled: null,
    scrambled: null,
    getList: function() {
        callAjax();
    },
    createList: function(data) {
        cipher.unscrambled = {};
        cipher.unscrambled.words = data.split("\r\n");
        cipher.unscrambled.sortedWordList = sort(cipher.unscrambled.words);
    },
    unscramble: function() {
        cipher.scrambled = {};
        cipher.scrambled.words = createScrambledWordArray();
        cipher.scrambled.words.sorted = sort(cipher.scrambled.words);
        
        forEach(cipher.scrambled.words.sorted, function (scrambledSortedWord, s) {
            var u = cipher.unscrambled.sortedWordList.indexOf(scrambledSortedWord);
            if (u !== -1) {
                $("#descrambled").append(cipher.scrambled.words[s] + "=" + cipher.unscrambled.words[u] + "<br>");
            }
        });
    }
};

function callAjax() {
    //We get a local list to avoid cross-domain.
    $.ajax({
        url: "Data/cipher.txt",
        data: "",
        success: cipher.createList,
        error: function() {
            alert("Error!");
        }
    });
}

function createScrambledWordArray() {
    var wordArray = new Array();
    wordArray[0] = "mkeart";
    wordArray[1] = "sleewa";
    wordArray[2] = "edcudls";
    wordArray[3] = "iragoge";
    wordArray[4] = "usrlsle";
    wordArray[5] = "nalraoci";
    wordArray[6] = "nsdeuto";
    wordArray[7] = "amrhat";
    wordArray[8] = "inknsy";
    wordArray[9] = "iferkna";

    return wordArray;
}

function sort(strings) {
    var array = [];

    forEach(strings, function sortCharacters(string) {
        array.push(string.split("").sort().join(""));
    });

    return array;
}

function forEach(collection, callback) {
    var i = null;
    var length = collection.length;
    for (i = 0; i < length; i += 1) {
        callback(collection[i], i);
    }
}
