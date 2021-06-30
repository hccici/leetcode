/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /* 可以采用摩尔投票法：
     1、假设众数的+1，其它-1。
     2、全部投票后票数一定是大于0的。
     3、假设前n个投片后结果为0，后n个投票的结果也一定大于0，所以前n个可以不care缩小了范围
  */
  let result = nums[0]
  let voting = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === result) {
      voting++
    } else {
      voting--
    }
    // 缩小范围
    if (voting === 0) {
      result = nums[i + 1]
    }
  }
  return result
};