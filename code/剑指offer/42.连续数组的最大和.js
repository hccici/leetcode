/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let max = nums[0]
//   for (let i = 0; i < nums.length; i++) {
//     let curV = 0
//     for (let j = i; j < nums.length; j++) {
//       curV += nums[j]
//       if (curV > max) {
//         max = curV
//       }
//     }
//   }
//   return max
// };

// 动态规划
// 假设有一个滑动窗口的前后坐标本别为start、end（都是闭区间）
// 状态定义：dp[i]表示，end = i时，0 > start > i,的最大值（i为下标）
// 转移方程：dp[i+1] = Max(nums[i+1], dp[i] + nums[i+1]),要不要前面的最大值，还是只要nums[i+1]就好
// 初始值：dp[0] = nums[0]
var maxSubArray = function (nums) {
  let max = nums[0]
  let curDp = nums[0]
  for (let i = 1; i < nums.length; i++) {
    curDp = Math.max(curDp + nums[i], nums[i])
    max = Math.max(curDp, max)
  }
  return max
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])