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
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0
    var q = [[root, 1]]
    while (q.length > 0) {
        var s = q.shift()
        var cn = s[0]
        var cd = s[1]
        if (!cn.left && !cn.right) return cd
        cn.left && q.push([cn.left, cd + 1])
        cn.right && q.push([cn.right, cd + 1])
    }
};