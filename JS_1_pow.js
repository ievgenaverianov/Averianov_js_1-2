var x = prompt('Введите число x:');
var n = prompt('Укажите степень n (целое число):');

/**
 * Calculates power with positive exponent value
 * @param x - the base of the power
 * @param n - exponent (integer, positive)
 * @returns {number} - calculated power - x^n
 */
function powPositiveExp(x, n) {
  var result = 1;
  for (var i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

/**
 * Calculates power with negative exponent value
 * @param x - the base of the power
 * @param n - exponent (integer, negative)
 * @returns {number} - calculated power - x^n
 */
function powNegativeExp(x, n) {
  var result = 1;
  for (var i = n; i < 0; i++) {
    result *= x;
  }
  return 1 / result;
}

/**
 * calculates power with any integer exponent value
 * @param x - the base of the power
 * @param n - any integer exponent
 * @returns {number} - calculated power - x^n
 */
function pow(x, n) {
  return n >= 0 ? powPositiveExp(x, n) : powNegativeExp(x, n);
}

console.log(x + '^' + n + '=' + pow(x, n));

