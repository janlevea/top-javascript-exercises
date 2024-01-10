const removeFromArray = function(array = [], ...args) {
    for(arg of args) {
        indexToRemove = array.indexOf(arg);
        if (indexToRemove == -1) {
            continue;
        }
        array.splice(indexToRemove, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
