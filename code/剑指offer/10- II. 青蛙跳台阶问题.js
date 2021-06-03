/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    let l = 1;
    let r = 2;
    let temp;
    for (let i = 0; i < n - 2; i++) {
        temp = r
        r = (l + r) % 1000000007
        l = temp
    }
    return r
};