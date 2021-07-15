/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (right >= left) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else {
      // 判断mid左边有序还是右边有序
      if (nums[mid] >= nums[left]) { // !左边有序，注意这个=号，因这是偏左的二分查找，所以只有两个数时，我们认为左边是有序的
        // 目标数在左边序列
        if (target >= nums[left] && target < nums[mid]) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      } else { // 右边有序
        // 目标数在右边序列
        if (target > nums[mid] && target <= nums[right]) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
    }
  }
  return -1
};
console.log(search([5, 1, 2, 3, 4], 1))