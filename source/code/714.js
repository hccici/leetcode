/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // 初始化,index 0：不持有 1：持有
  const dp = [0, -prices[0]]
  // 推算
  for (let i = 1; i < prices.length; i++) {
    const [last0, last1] = dp
    dp[0] = Math.max(last0, last1 + prices[i] - fee)
    dp[1] = Math.max(last1, last0 - prices[i])
  }
  return Math.max(dp[0], dp[1])
};