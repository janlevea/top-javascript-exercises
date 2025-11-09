const removeFromArray = function(array, ...args) {
    args.forEach((arg) => {
        let ixToRemove = array.indexOf(arg);
        while (ixToRemove !== -1) {
            array.splice(ixToRemove, 1);
            ixToRemove = array.indexOf(arg);
        }
    })
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
