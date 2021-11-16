/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = []
  for (let i = 0; i < triangle.length; i++) {
    dp.push(new Array(triangle[i].length).fill(0))
  }
  dp[0][0] = triangle[0][0]
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const prevLeft = dp[i - 1][j - 1] ?? Number.MAX_VALUE
      const prevRight = dp[i - 1][j] ?? Number.MAX_VALUE
      dp[i][j] = triangle[i][j] + Math.min(prevLeft, prevRight)
    }
  }
  let min = Number.MAX_VALUE
  let lastIndex = triangle.length - 1
  for (let i = 0; i < triangle[lastIndex].length; i++) {
    min = Math.min(min, dp[lastIndex][i])
  }
  return min
};
minimumTotal([[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]])