/**
 * @param {number} n
 * @return {number}
 */
/* var fib = function (n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}; */
var fib = function (n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    let l = 0;
    let r = 1;
    let temp;
    for (let i = 0; i < n - 1; i++) {
        temp = r
        r = (l + r) % 1000000007
        l = temp
    }
    return r
};