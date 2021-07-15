/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const result = []
  if (k === 0) {
    return result
  }
  const end = nums.length - k
  for (let i = 0; i <= end; i++) {
    let max = nums[i]
    for (let j = 1; j < k; j++) {
      max = Math.max(max, nums[i + j])
    }
    result.push(max)
  }
  return result
};