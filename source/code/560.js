/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 前缀和 + map
var subarraySum = function (nums, k) {
  //  记录和出现的次数，key为和，value为出现的次数
  const record = {}
  let sum = 0
  let account = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    // 从头开始的能达到目标的
    if (sum === k) {
      account++
    }
    // 砍掉前缀和能达到目标的
    if (record[sum - k]) {
      account += record[sum - k]
    }
    // 记录和
    if (!record[sum]) {
      record[sum] = 1
    } else {
      record[sum] += 1
    }
  }
  return account
};
subarraySum([1, 1, 1], 2)