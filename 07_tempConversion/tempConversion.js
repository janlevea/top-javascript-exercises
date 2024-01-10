const convertToCelsius = function(farenheit = 0) {
  let celsius = (farenheit - 32) * 5/9;
  celsius = Number(celsius.toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(celsius = 0) {
  let farenheit = (celsius * 9/5 + 32);
  farenheit = Number(farenheit.toFixed(1));
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
