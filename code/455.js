var findContentChildren = function (g, s) {
    function handleSort(a, b) {
        return a - b
    }
    g.sort(handleSort)
    s.sort(handleSort)
    let i = 0 // 即表示孩子满足值得下标，又表示当前满足孩子的数量
    s.forEach(item => {
        if (item >= g[i]) {
            i++
        }
    })
    return i
};