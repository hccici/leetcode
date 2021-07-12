/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const temp = s.split('')
  const t1 = temp.splice(n)
  return [...t1, ...temp].join('')
};
console.log(reverseLeftWords('abcd', 2))