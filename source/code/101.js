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
 * @return {boolean}
 */
// 深度优先遍历思路
var isSymmetric = function (root) {
    let flag = true
    function rec(r1, r2) {
        if (!r1 && !r2) {
            return
        } else if (!r1 || !r2) {
            flag = false
            return
        } else if (r1.val !== r2.val) {
            flag = false
            return
        } else {
            if (flag) {
                rec(r1.left, r2.right)
                rec(r2.left, r1.right)
            }
        }
    }
    rec(root.left, root.right)
    return flag
};
// 广度优先遍历
var isSymmetric = function (root) {
    let q1 = [root.left]
    let q2 = [root.right]
    while (q1.length > 0 || q2.length > 0) {
        let c1 = q1.shift()
        let c2 = q2.shift()
        if (!c1 && !c2) {
            continue
        }
        if (!c1 || !c2) {
            return false
        }
        if (c1.val !== c2.val) {
            return false
        }
        // 因为涉及到结构，空的也要入队
        q1.push(c1.left)
        q1.push(c1.right)
        // 反向遍历
        q2.push(c2.right)
        q2.push(c2.left)
    }
    return true
};