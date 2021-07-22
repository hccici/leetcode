/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var numSubarrayProductLessThanK = function (nums, k) {
//   let result = 0
//   function x(start, end) {
//     let j = 1
//     for (let i = start; i < end; i++) {
//       j *= nums[i]
//       if (j >= k) {
//         return
//       }
//     }
//     result++
//   }
//   let start
//   let end
//   let step = 1
//   while (step <= nums.length) {
//     start = 0
//     end = step
//     while (end <= nums.length) {
//       x(start, end)
//       start++
//       end++
//     }
//     step++
//   }
//   return result
// };
// 超出时间限制了
var numSubarrayProductLessThanK = function (nums, k) {
  let result = 0
  let left = 0
  while (left < nums.length) {
    let t = 1
    let right = left
    while (right < nums.length) {
      t *= nums[right]
      if (t < k) {
        result++
      }
      right++
    }
    left++
  }
  return result
};
numSubarrayProductLessThanK([10, 5, 2, 6], 100)