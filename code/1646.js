/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n < 2) {
    return n
  }
  const nums = new Array(n + 1).fill(0)
  nums[1] = 1
  max = 1
  for (let i = 2; i <= n; i++) {
    const y = i % 2
    const t = Math.floor(i / 2)
    if (y) {
      nums[i] = nums[t] + nums[t + 1]
    } else {
      nums[i] = nums[t]
    }
    max = Math.max(nums[i], max)
  }
  return max
};