/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === '') {
    return []
  }
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  let result = []
  function set(path, curIndex) {
    const charts = map[digits[curIndex]];
    for (let ci = 0; ci < charts.length; ci++) {
      path.push(charts[ci])
      if (curIndex === digits.length - 1) {
        result.push(path.join(''))
      } else {
        set(path, curIndex + 1)
      }
      path.pop()
    }
  }
  set([], 0)
  return result
};
letterCombinations('23')