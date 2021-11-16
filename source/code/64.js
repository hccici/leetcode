/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  dp[0][0] = grid[0][0]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0 && j > 0) {
        dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
      } else if (j > 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1]
      } else if (i > 0) {
        dp[i][j] = grid[i][j] + dp[i - 1][j]
      }
    }
  }
  return dp[m - 1][n - 1]
};
const grid = [[1,2,3],[4,5,6]]
minPathSum(grid)