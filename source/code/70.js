// 递归版 性能不太好
var climbStairs = function (n) {
    function dg(n) {
        if (n === 1) {
            return 1
        }
        if (n === 2) {
            return 2
        }
        return dg(n - 1) + dg(n - 2)
    }
    return dg(n)
};
// 非递归
var climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    let lp = 1
    let rp = 2
    // 相加几趟
    for (let i = 0; i < n - 2; i++) {
        let temp = rp
        rp = lp + rp
        lp = temp
    }
    return rp
};