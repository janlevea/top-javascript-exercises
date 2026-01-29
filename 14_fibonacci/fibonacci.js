const fibonacci = function(number) {
    // Convert a number given as string to a number
    number = parseInt(number);

    // Variables for calculating
    let num1 = 0;
    let num2 = 1;
    let sum;

    // Don't accept negatives
    if (number < 0) return "OOPS";
    else if (number === 0) return 0;
    else if (number === 1 || number === 2) return 1;
    else {
        for (let i = 2; i <= number; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
