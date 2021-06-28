/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  /* j和k分别是下标 */
  let arr = [...pushed]
  let j = 0;
  let k = 0;
  while (k < popped.length) {
    if (arr[j] !== popped[k]) {
      j++;
      if (j === arr.length) {
        return false
      }
    } else {
      k++;
      arr.splice(j, 1)
      j--;
    }
  }
  return true
};
// 模拟栈