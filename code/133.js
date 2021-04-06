/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// 深度优先
var cloneGraph = function (node) {
    if (!node) { return }
    var visited = new Map()
    var dfs = function (n) {
        var copyN = new Node(n.val)
        visited.set(n, copyN)
        n.neighbors.forEach(item => {
            if (!visited.get(item)) {
                dfs(item)
            }
            // 走到这里表示能向下走的都已经遍历了，所以visited中可以直接获取copy好的
            copyN.neighbors.push(visited.get(item))
        })
    }
    dfs(node)
    return visited.get(node)
};

// 广度优先
var cloneGraph = function (node) {
    if (!node) { return }
    var visited = new Map()
    var queue = [node]
    visited.set(node, new Node(node.val))
    while (queue.length) {
        var curN = queue.shift()
        curN.neighbors.forEach(item => {
            if (!visited.get(item)) {
                queue.push(item)
                visited.set(item, new Node(item.val))
            }
            // 已经遍历过了的，直接添加
            visited.get(curN).neighbors.push(visited.get(item))
        })
    }
    return visited.get(node)
};