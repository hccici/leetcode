/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let top = 0
  let bottom = matrix.length - 1
  while (bottom >= top) {
    const mid = Math.floor((top + bottom) / 2)
    if (target > matrix[mid][0]) {
      top = mid + 1
    } else if (target < matrix[mid][0]) {
      bottom = mid - 1
    } else {
      return true
    }
  }
  // !推算得知如果值存在应该在bottom那一列,但是要注意判断bottom是否出了边界
  if (bottom < 0) {
    return false
  }
  let left = 0
  let right = matrix[bottom].length - 1
  while (right >= left) {
    const mid = Math.floor((left + right) / 2)
    if (target > matrix[bottom][mid]) {
      left = mid + 1
    } else if (target < matrix[bottom][mid]) {
      right = mid - 1
    } else {
      return true
    }
  }
  return false
};
searchMatrix([[1]], 0)