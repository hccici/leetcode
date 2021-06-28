/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const result = []
  const stack = [{ node: root, level: 0 }]
  while (stack.length > 0) {
    const { node, level } = stack.shift()
    result[level] || (result.push([]))
    result[level].push(node.val)
    node.left && (stack.push({ node: node.left, level: level + 1 }))
    node.right && (stack.push({ node: node.right, level: level + 1 }))
  }
  return result
};