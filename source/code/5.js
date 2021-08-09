/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }
  let maxStart = 0
  let maxEnd = 0
  function exc(left, right) {
    // 向两边扩散
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      left--
      right++
    }
    // rigth、left刚好超出了1位边界，所有在计算长度的时候，+ 1 - 2 ,最终 - 1
    if (right - left - 1 > maxEnd - maxStart + 1) {
      maxEnd = right - 1
      maxStart = left + 1
    }
  }
  for (let i = 0; i < s.length - 1; i++) {
    // 考虑 abc abbc两种类型回文设计的
    exc(i, i)
    exc(i, i + 1)
  }
  return s.slice(maxStart, maxEnd + 1)
};
