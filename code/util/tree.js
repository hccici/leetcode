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
  getTree(arr) {
    arr = [...arr]
    arr[0] = new TreeNode(arr[0])
    for (let i = 0; i < arr.length; i++) {
      let leftIndex = 2 * i + 1
      let rightIndex = 2 * i + 2
      if (leftIndex < arr.length) {
        arr[leftIndex] = new TreeNode(arr[leftIndex])
        arr[i].left = arr[leftIndex]
      }
      if (rightIndex < arr.length) {
        arr[rightIndex] = new TreeNode(arr[rightIndex])
        arr[i].right = arr[rightIndex]
      }
    }
    return arr[0]
  }
}
