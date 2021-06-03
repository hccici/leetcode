/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    let x = matrix.length - 1
    let y = 0
    while (x >= 0 && y < matrix[0].length) {
        if (target > matrix[x][y]) {
            y++
        } else if (target < matrix[x][y]) {
            x--
        } else {
            return true
        }
    }
    return false
};