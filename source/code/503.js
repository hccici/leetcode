/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const { length } = nums
  const result = new Array(length).fill(-1)
  const stack = []
  for (let i = 0; i < length * 2 - 1; i++) {
    while (stack.length > 0 && nums[i % length] > nums[stack[stack.length - 1]]) {
      const index = stack.pop()
      result[index] = nums[i % length]
    }
    stack.push(i % length)
  }
  return result
};