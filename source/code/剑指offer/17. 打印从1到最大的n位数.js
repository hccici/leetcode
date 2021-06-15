/**
 * @param {number} n
 * @return {number[]}
 */
// 暂时不考虑大数
var printNumbers = function (n) {
  const len = Math.pow(10, n) - 1
  const result = []
  for (let i = 1; i <= len; i++) {
    result.push(i)
  }
  return result
};