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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  if (!root) { return [] }
  const result = []
  function dfs(cur, path) {
    path.push(cur.val)
    if (!cur.left && !cur.right) {
      const total = path.reduce((t, n) => {
        return t + n
      })
      if (total === target) {
        result.push([...path])
      }
    } else {
      if (cur.left) {
        dfs(cur.left, path)
        path.pop()
      }
      if (cur.right) {
        dfs(cur.right, path)
        path.pop()
      }
    }
  }
  dfs(root, [])
  return result
};