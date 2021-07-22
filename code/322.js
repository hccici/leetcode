/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 在dp数组中填充一个无限大的值，这样在给dp[i]赋值的时候可以把dp[i]作为比较的临时存放位置，因为它无限大的，所以比较第一个是，相当于直接赋值
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let curAmount = 1; curAmount <= amount; curAmount++) {
    // 多个数进行比较时，可以用两两比较
    for (let i = 0; i < coins.length; i++) {
      // 负数金额不予理会
      if (curAmount - coins[i] < 0) {
        continue
      }
      dp[curAmount] = Math.min(dp[curAmount], dp[curAmount - coins[i]] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
coinChange([1, 2, 5], 11)