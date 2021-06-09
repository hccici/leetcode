/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((total, cur) => total + cur)
  // 因为a为选择元素的和，所以必须是正整数
  if (target > sum || (sum + target) % 2 !== 0) {
    return 0
  }
  const a = (sum + target) / 2
  const dp = new Array(nums.length).fill(0).map(() => new Array(a + 1).fill(0))
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= a; j++) {
      // 初始化
      if (i === 0) {
        // ！！注意，因为选与不选都是一种方法，所以和为0有一种方法那就是不选 
        if (nums[0] === j || j === 0) {
          dp[0][j] = 1
        }
        // 如果第一个元素是0，j=0，那么它有两种选择
        if (nums[0] === 0 && j === 0) {
          dp[0][j] = 2
        }
      } else {
        // 选择的数比目标值还大的肯定加不进来
        if (j - nums[i] >= 0) {
          dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i]]
        } else {
          dp[i][j] = dp[i - 1][j]
        }
      }
    }
  }
  return dp[nums.length - 1][a]
};
findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1)