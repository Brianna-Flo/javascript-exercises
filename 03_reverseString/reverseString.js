const reverseString = function(wordToReverse) {
    /*let wordAsArray = wordToReverse.split("");
    wordAsArray.reverse();
    const wordReversed = wordAsArray.join("");
    return wordReversed;*/
    return wordToReverse.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
