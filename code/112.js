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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    var s = []
    function dfs(n, t) {
        if (!n) return
        if (!n.left && !n.right) {
            s.push(t + n.val)
        }
        dfs(n.left, t + n.val)
        dfs(n.right, t + n.val)
    }
    dfs(root, 0)
    console.log(s)
    return s.includes(targetSum)
};