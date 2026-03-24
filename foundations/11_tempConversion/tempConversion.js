const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return Math.floor(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5 + 32);
  return Math.floor(fahrenheit * 10) / 10;
};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
