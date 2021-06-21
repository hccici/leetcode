/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 首尾指针
var exchange = function (nums) {
  let lp = 0
  let rp = nums.length - 1
  function h(lp, rp) {
    let temp = nums[lp]
    nums[lp] = nums[rp]
    nums[rp] = temp
  }
  while (rp > lp) {
    if (nums[lp] % 2 === 0 && nums[rp] % 2 === 1) {
      h(lp, rp)
      lp++
      rp--
    } else if (nums[lp] % 2 === 1) {
      lp++
    } else if (nums[rp] % 2 === 0) {
      rp--
    } else {
      // donothing
    }
  }
  return nums
};
exchange([1,2,3,4])
