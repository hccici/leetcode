/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    //  去除首尾空格就可以去除状态8，和状态0的blank路线了，接下来构建路线
    var graph = {
        0: { 'digit': 6, 'sign': 1, 'dot': 2 },
        1: { 'digit': 6, 'dot': 2 },
        2: { 'digit': 3 },
        3: { 'digit': 3, 'e': 4 },
        4: { 'digit': 5, 'sign': 7 },
        5: { 'digit': 5 },
        6: { 'digit': 6, 'dot': 3, 'e': 4 },
        7: { 'digit': 5 }
    }
    var state = 0
    for (c of s.trim()) {
        var path = undefined
        if (c >= '0' && c <= '9') {
            path = 'digit'
        }
        if (c === '+' || c === '-') {
            path = 'sign'
        }
        if (c.toLowerCase() === 'e') {
            path = 'e'
        }
        if (c === '.') {
            path = 'dot'
        }
        state = graph[state][path]
        if (state === undefined) {
            return false
        }
    }
    const g = [3, 6, 5]
    if (g.includes(state)) {
        return true
    }
    return false
};
console.log(isNumber('5K'))