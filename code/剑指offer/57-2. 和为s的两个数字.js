/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  function getArr(val, step) {
    const arr = []
    for (let i = 0; i < step; i++) {
      arr.push(val + i)
    }
    return arr
  }
  let end = Math.floor(target / 2) + 1
  const result = []
  for (let i = 1; i <= end; i++) {
    let total = 0
    let step = 0
    while (total < target) {
      total += (i + step)
      step++
      if (total === target && step > 1) {
        result.push(getArr(i, step))
      }
    }
  }
  return result
};
findContinuousSequence(9)