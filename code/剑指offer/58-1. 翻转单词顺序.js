/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(' ').filter(Boolean)
  arr.reverse()
  return arr.join(' ')
};
reverseWords("a good   example")