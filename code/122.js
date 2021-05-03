var maxProfit = function (prices) {
    let get = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] < prices[i]) {
            get += prices[i] - prices[i - 1]
        }
    }
    return get
};