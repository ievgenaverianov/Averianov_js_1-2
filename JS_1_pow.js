var x = prompt('Введите число x:');
var n = prompt('Укажите степень n (целое число):');

if (n >= 0) {
  function powPositiveExp(x, n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }

  console.log(powPositiveExp(x, n));

} else {

  function powNegativeExp(x, n) {
    var result = 1;
    for (var i = n; i < 0; i++) {
      result *= x;
    }
    return result;
  }

  console.log(1 / powNegativeExp(x, n));
}
