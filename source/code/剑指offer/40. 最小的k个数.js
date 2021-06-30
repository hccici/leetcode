/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arrL, k) {
  /* 
     对于这个题排序就好，尽量使用logN复杂度的算法，这里使用分组的快速排序来进行进一步优化：
     因为基准数的左边都是比它小的，所以对于前k个数，如果k大于这时基准数的坐标，那么对右边进行递归，左边就不用管了，
     反之亦然，如果刚好等于，直接返回左边的数组，就是前K个最小值
  */
  function quick(arr, len) {
    if (arr.length < 2) {
      return arr
    }
    const base = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > base) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }
    const baseIndex = left.length
    if (len > baseIndex) {
      return [...left, base, ...quick(right, len - left.length - 1)] // ! 前面的相当于去掉了
    } else if (len < baseIndex) {
      return [...quick(left, len), base, ...right]
    } else {
      return [...left, base, ...right]
    }
  }
  const arrR = quick(arrL, k)
  return arrR.splice(0, k)
};

let a = [0, 1, 1, 1, 4, 5, 3, 7, 7, 8, 10, 2, 7, 8, 0, 5, 2, 16, 12, 1, 19, 15, 5, 18, 2, 2, 22, 15, 8, 22, 17, 6, 22, 6, 22, 26, 32, 8, 10, 11, 2, 26, 9, 12, 9, 7, 28, 33, 20, 7, 2, 17, 44, 3, 52, 27, 2, 23, 19, 56, 56, 58, 36, 31, 1, 19, 19, 6, 65, 49, 27, 63, 29, 1, 69, 47, 56, 61, 40, 43, 10, 71, 60, 66, 42, 44, 10, 12, 83, 69, 73, 2, 65, 93, 92, 47, 35, 39, 13, 75]
let k = 75
console.log(getLeastNumbers(a, k))
