/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  function find(t, _left) {
    let left = _left
    let right = nums.length - 1
    while (right >= left) {
      let mid = Math.floor((left + right) / 2)
      if (t > nums[mid]) {
        left = mid + 1
      } else if (t < nums[mid]) {
        right = mid - 1
      } else {
        return nums[mid]
      }
    }
    return -1
  }
  for (let i = 0; i < nums.length - 1; i++) {
    const cur = nums[i]
    const curO = find(target - cur, i + 1)
    if (curO > 0) {
      return [cur, curO]
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9))