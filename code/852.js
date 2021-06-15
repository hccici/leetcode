/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let startIndex = 0
  let endIndex = arr.length - 1
  let midIndex
  while (1) {
    midIndex = Math.floor((startIndex + endIndex) / 2)
    if (arr[midIndex] > arr[midIndex + 1]) {
      endIndex = midIndex
    } else if (arr[midIndex] < arr[midIndex + 1]) {
      if (startIndex === midIndex) {
        return midIndex + 1
      }
      startIndex = midIndex
    } else {
      // 理论上不存在相等
    }
  }
};
console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]))