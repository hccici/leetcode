/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let cur, left, right
  const length = nums1.length + nums2.length
  let step = Math.floor((length - 1) / 2)
  for (let i = 0; i <= step; i++) {
    const nextLeft = left === undefined ? 0 : left + 1
    const nextRight = right === undefined ? 0 : right + 1
    // 到头
    if (!nums1[nextLeft] && nums1[nextLeft] !== 0) {
      right = nextRight
      cur = 'right'
    } else if (!nums2[nextRight] && nums2[nextRight] !== 0) {
      left = nextLeft
      cur = 'left'
    } else if (nums1[nextLeft] > nums2[nextRight]) {
      right = nextRight
      cur = 'right'
    } else {
      left = nextLeft
      cur = 'left'
    }
  }
  let index = cur === 'right' ? right : left
  let list = cur === 'right' ? nums2 : nums1
  if (length % 2 === 0) {
    const nextLeft = left === undefined ? 0 : left + 1
    const nextRight = right === undefined ? 0 : right + 1
    let next = Math.min(nums1[nextLeft] ?? Number.MAX_VALUE, nums2[nextRight] ?? Number.MAX_VALUE)
    return (list[index] + next) / 2
  } else {
    return list[index]
  }
};
const nums1 = [3], nums2 = [-2, -1]
console.log(findMedianSortedArrays(nums1, nums2))