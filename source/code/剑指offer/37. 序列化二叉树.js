
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let str = []
  if (!root) {
    return str
  }
  const list = [root]
  while (list.length > 0) {
    const cur = list.shift()
    str.push(cur ? cur.val : null)
    cur && (list.push(cur.left))
    cur && (list.push(cur.right))
  }
  return str
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  console.log(data)
  if (data.length === 0) {
    return null
  }
  const head = new TreeNode(data[0])
  const stack = [head]
  let p = 1
  while (stack.length > 0 && p < data.length) {
    const cur = stack.shift()
    if (data[p] !== null) {
      cur.left = new TreeNode(data[p])
      stack.push(cur.left)
    }
    p++
    if (data[p] !== null) {
      cur.right = new TreeNode(data[p])
      stack.push(cur.right)
    }
    p++
  }
  return head
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
serialize(deserialize([5, 2, 3, null, null, 2, 4, 3, 1]))