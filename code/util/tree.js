class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
export default class Tree {
  /**
   * @description 根据数组获得一颗特殊的完全二叉树（从最右边开始缺）
   * @param {Array} arr
   * @return {Tree}
   */
  getTree(data) {
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
  }
}
