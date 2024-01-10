const repeatString = function(strToRepeat, times) {
    if (times < 0) return "ERROR";
    let stringToReturn = "";
    for(let i = 0; i < times; i++) {
        stringToReturn += strToRepeat;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
