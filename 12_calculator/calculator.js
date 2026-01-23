const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrayOfNums) {
	return arrayOfNums.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(arrayOfNums) {
  return arrayOfNums.reduce((prev, curr) => prev * curr, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
