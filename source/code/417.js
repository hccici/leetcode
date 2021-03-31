/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    if (!heights || heights.length === 0) { return }
    // 新建两个矩阵分别记录能够到达太平洋、大西洋的点
    var m = heights.length
    var n = heights[0].length
    // 用fill创建的，填充对象时是同一个，要用from方法创建才是不同的
    // var flow1 = new Array(m).fill(new Array(n).fill(0))
    // var flow2 = new Array(m).fill(new Array(n).fill(0))
    var flow1 = Array.from({ length: m }, () => new Array(n).fill(0))
    var flow2 = Array.from({ length: m }, () => new Array(n).fill(0))
    // 从海岸线边缘深度优先遍历，访问过就记录下来
    function dfs(r, c, flow) {
        flow[r][c] = 1
        // 4个方向
        var move = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]]
        move.forEach(([mr, mc]) => {
            if (
                // 要移动到节点存在才行
                mr >= 0 && mr < m
                && mc >= 0 && mc < n
                // 节点没访问过
                && flow[mr][mc] === 0
                // 高度要小于下一节点
                && heights[r][c] <= heights[mr][mc]
            ) {
                dfs(mr, mc, flow)
            }
        })
    }
    // 从边缘开始时，可能该边缘节点已被访问，调用dfs时，可判断以达到加快算法速度
    for (var r = 0; r < m; r++) {
        if (flow1[r][0] === 0) {
            dfs(r, 0, flow1)
        }
        if (flow2[r][n - 1] === 0) {
            dfs(r, n - 1, flow2)
        }
    }
    for (var c = 0; c < n; c++) {
        if (flow1[0][c] === 0) {
            dfs(0, c, flow1)
        }
        if (flow2[m - 1][c] === 0) {
            dfs(m - 1, c, flow2)
        }
    }
    // 最后取出两个洋都能访问到的坐标
    var result = []
    for (var r = 0; r < m; r++) {
        for (var c = 0; c < n; c++) {
            if (flow1[r][c] === 1 && flow2[r][c] === 1) {
                result.push([r, c])
            }
        }
    }
    return result
};
pacificAtlantic([[10, 10, 10], [10, 1, 10], [10, 10, 10]])