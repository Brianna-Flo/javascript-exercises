const convertToCelsius = function(tempInFahrenheit) {
  /*(x − 32) × ⁠5/9 */
  const calculated = (tempInFahrenheit - 32) * (5 / 9);
  return Math.round(calculated * 10) / 10
};

const convertToFahrenheit = function(tempInCelcius) {
  const calculated = ((tempInCelcius * (9 / 5)) + 32);
  return Math.round(calculated * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
