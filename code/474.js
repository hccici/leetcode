var findMaxForm = function (strs, m, n) {
  // 创建3维数组储存最大价值
  const maxPriceList = new Array(strs.length).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)))
  for (let i = 0; i < strs.length; i++) {
    const { oneNums, zeroNums } = get01Nums(strs[i])
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        // 初始化值，对前0个元素进行挑选能够得到的最大值
        if (i === 0) {
          if (oneNums <= k && zeroNums <= j) {
            maxPriceList[i][j][k] = 1
          }
        } else {
          // 根据状态转移方程推算结果
          // 因为选择的i元素的0和1的个数不能超过容量
          if (oneNums <= k && zeroNums <= j) {
            maxPriceList[i][j][k] = Math.max(maxPriceList[i - 1][j][k], maxPriceList[i - 1][j - zeroNums][k - oneNums] + 1)
          } else {
            maxPriceList[i][j][k] = maxPriceList[i - 1][j][k]
          }
        }
      }
    }
  }
  return maxPriceList[strs.length - 1][m][n]
};
var get01Nums = function (str) {
  let result = {
    oneNums: 0,
    zeroNums: 0
  }
  for (let value of str) {
    if (value === '0') {
      result.zeroNums++
    } else {
      result.oneNums++
    }
  }
  return result
}
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))