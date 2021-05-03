var numWaterBottles = function (numBottles, numExchange) {
    let total = numBottles, emptyBottles = numBottles
    while (emptyBottles >= numExchange) {
        let changeBottles = Math.floor(emptyBottles / numExchange)
        // 更新剩余空瓶数
        emptyBottles = emptyBottles - (changeBottles * numExchange) + changeBottles
        // 更新喝到的总数
        total += changeBottles
    }
    return total
};
// 还可以递归