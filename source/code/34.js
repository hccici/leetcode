/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function find() {
    let left = 0
    let right = nums.length - 1
    while (right >= left) {
      const mid = Math.floor((left + right) / 2)
      if (target > nums[mid]) {
        left = mid + 1
      } else if (target < nums[mid]) {
        right = mid - 1
      } else {
        return mid
      }
    }
    return -1
  }
  const tI = find()
  if (tI === -1) {
    return [-1, -1]
  }
  const result = [tI, tI]
  let step = 1
  let flag = true
  while (flag && result[0] - step >= 0) {
    const cur = nums[result[0] - step]
    if (cur !== target) {
      flag = false
    } else {
      step++
    }
  }
  result[0] = result[0] - (step - 1)
  // 右边
  step = 1
  flag = true
  while (flag && result[1] + step <= nums.length - 1) {
    const cur = nums[result[1] + step]
    if (cur !== target) {
      flag = false
    } else {
      step++
    }
  }
  result[1] = result[1] + (step - 1)
  return result
};
searchRange([5, 7, 7, 8, 8, 10], 8)