/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  let min = 5001
  while (right >= left) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] >= nums[left]) {
      // 左边有序
      min = Math.min(min, nums[left])
      left = mid + 1
    } else {
      // 右边有序
      min = Math.min(min, nums[mid])
      right = mid - 1
    }
  }
  return min
};