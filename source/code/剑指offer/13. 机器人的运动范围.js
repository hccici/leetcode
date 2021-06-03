/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let map = new Map()
    function dfs(y, x) {
        if (y < 0 || y > m - 1 || x < 0 || x > n - 1) {
            return
        }
        // 遇到访问过的也不访问
        if (map.has(`${y},${x}`)) {
            return
        }
        // 超出k了也不访问
        if (isK(y, x) > k) {
            return
        }
        // 访问了记录
        map.set(`${y},${x}`, true)
        dfs(y - 1, x)
        dfs(y + 1, x)
        dfs(y, x + 1)
        dfs(y, x - 1)
    }
    function isK(y, x) {
        function add(pre, cur) {
            return parseInt(cur) + pre
        }
        y = (y + '').split('').reduce(add, 0)
        x = (x + '').split('').reduce(add, 0)
        return x + y
    }
    dfs(0, 0)
    return map.size
};
movingCount(2, 3, 1)