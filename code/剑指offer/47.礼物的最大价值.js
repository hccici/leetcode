/**
 * @param {number[][]} grid
 * @return {number}
 */
// 动态规划
// 状态定义：dp[x][y] 为走到这个节点的能够获取的最大值
// 转移方程：dp[x][y] = Math.max(dp[x - 1][y], dp[x][y - 1]) + grid[x][y]，对于y===0 和x===0 的情况需要特殊处理，因为它只能从一个方向来
// 初始值：dp[0][0] = grid[0][0]
var maxValue = function (grid) {
  const maxX = grid.length
  const maxY = grid[0].length
  const dp = new Array(maxX).fill(0).map(() => new Array(maxY).fill(0))
  for (let x = 0; x < maxX; x++) {
    for (let y = 0; y < maxY; y++) {
      if (x === 0 && y === 0) {
        dp[0][0] = grid[0][0]
      } else if (y === 0) {
        dp[x][y] = dp[x - 1][y] + grid[x][y]
      } else if (x === 0) {
        dp[x][y] = dp[x][y - 1] + grid[x][y]
      } else {
        dp[x][y] = Math.max(dp[x - 1][y], dp[x][y - 1]) + grid[x][y]
      }
    }
  }
  return dp[maxX - 1][maxY - 1]
};
maxValue([[1, 2, 5], [3, 2, 1]])