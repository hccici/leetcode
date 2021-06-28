/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const stack = [root]
  const result = []
  while (stack.length > 0) {
    const cur = stack.shift()
    result.push(cur.val)
    cur.left && (stack.push(cur.left))
    cur.right && (stack.push(cur.right))
  }
  return result
};