const reverseString = function(stringToReverse = "") {
    let newString = "";
    for (let i = stringToReverse.length - 1; i >= 0; i--) {
        newString += stringToReverse[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
