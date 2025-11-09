const reverseString = function(string) {
    strLen = string.length;
    reversedStr = "";
    for (let i = strLen - 1; i >= 0; i--) {
        reversedStr += string[i];
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
