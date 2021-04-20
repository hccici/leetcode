/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    var q = [root]
    var r = []
    while (q.length > 0) {
        var l = q.length // 当前层级的节点数
        r.push([]) // 为当前层级创建内容
        while (l > 0) {
            l--
            var cn = q.shift()
            r[r.length-1].push(cn.val) // 向当前层级添加数据
            // 把下一层级的全部入队
            cn.left && q.push(cn.left)
            cn.right && q.push(cn.right)
        }
    }
    return r
};