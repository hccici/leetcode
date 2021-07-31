/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let i = 0
  let j = 0
  let result = []
  while (i < firstList.length && j < secondList.length) {
    const f = firstList[i]
    const s = secondList[j]
    // !取交集的方法，取最大的左边，取最小的右边
    const left = Math.max(f[0], s[0])
    const right = Math.min(f[1], s[1])
    if (left <= right) {
      result.push([left, right])
    }
    if (f[1] < s[1]) {
      i++
    } else if (f[1] > s[1]) {
      j++
    } else {
      i++
      j++
    }
  }
  return result
};
intervalIntersection(
  [[3, 5], [9, 20]],
  [[4, 5], [7, 10], [11, 12], [14, 15], [16, 20]]
)