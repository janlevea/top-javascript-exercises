const convertToCelsius = function(fahrenheit) {
  // From fahrenheit to celsius
  let celsius = (fahrenheit - 32) * 5/9;
  // Round to 1 decimal point
  // toFixed returns a string + before variable name converts it into number
  celsius = +celsius.toFixed(1);
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  // From celsius to fahrenheit
  let fahrenheit = (celsius * 9/5 + 32);
  // Round to 1 decimal point
  fahrenheit = +fahrenheit.toFixed(1);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
