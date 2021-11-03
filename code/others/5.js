import { treeUtil } from "../util/index.js";
/**
 * @param {number[]} target
 * @param {TreeNode} root
 * @return {number[]}
 */
function get(target, root) {
  const result = new Array(target.length).fill(-1)
  const record = getMaxDepth(root)
  Object.keys(record).forEach((depth) => {
    for (let index = 0; index < target.length; index++) {
      if (record[depth] > target[index] && depth > result[index]) {
        result[index] = depth
      }
    }
  })
  return result
}
/**
 * @description: 通过BFS获取，每层的最大值
 * @param {TreeNode} root
 * @return {Object}  key:深度,value:每层最大值
 */
function getMaxDepth(root) {
  const result = {}
  const queue = []
  root && queue.push(root)
  let depth = 0
  while (queue.length) {
    depth++
    // 拿到当前层级要遍历的个数
    let listNum = queue.length
    // 当前层级的最大值
    let curDepthMaxValue = 0;
    // 进行层级遍历
    while (listNum) {
      const cur = queue.shift()
      if (cur.val > curDepthMaxValue) {
        curDepthMaxValue = cur.val
      }
      // 存它的子节点
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
      // 减少当前层级的遍历个数
      listNum--
    }
    // 记录
    result[depth] = curDepthMaxValue
  }
  return result
}
const root = treeUtil.getTree([3, 4, 11, 3, null, null, 8, 7, null, 5])
const target = [6, 2, 9, 7, 9]
console.log(get(target, root))