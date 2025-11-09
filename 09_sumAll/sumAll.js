const sumAll = function(num1, num2) {
    let sum = 0;
    if (
        num1 < 0 || num2 < 0 ||
        !Number.isInteger(num1) || !Number.isInteger(num2)
    ) {
        return "ERROR";
    }
    if (!(num1 <= num2)) { 
        // if second number is bigger than the first one
        // reverse them
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for (num1; num1 <= num2; num1++) {
        sum += num1;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
