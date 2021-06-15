/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n >= 0) {
    return _pow(x, n)
  } else {
    return 1 / _pow(x, Math.abs(n))
  }
  function _pow(x, n) {
    if (n === 1) {
      return x
    }
    if (n === 0) {
      return 1
    }
    const temp = _pow(x, Math.floor(n / 2))
    return n % 2 ? x * temp * temp : temp * temp
  }
};