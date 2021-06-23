import { treeUtil } from "../util/index.js";
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) {
    return false
  }
  let arr = find(A, B.val)
  const ws = pre(B)
  const rB = ws[0]
  const limit = ws[1]
  return arr.some(item => {
    const str = pre(item, limit)
    return str[0] === rB
  })
};
function find(head, val) {
  let arr = []
  function _f(cur) {
    if (!cur) {
      return
    }
    if (cur.val === val) {
      arr.push(cur)
    }
    _f(cur.left)
    _f(cur.right)
  }
  _f(head)
  return arr
}
function pre(head, limit = 100000) {
  let str = ''
  let list = [head]
  let count = 0
  while (list.length && limit > 0) {
    const cur = list.shift()
    str += cur.val
    cur.left && (list.push(cur.left))
    cur.right && (list.push(cur.right))
    limit--
    count++
  }
  return [str, count]
}
const t1 = treeUtil.getTree([10, 12, 6, 8, 3, 11])
const t2 = treeUtil.getTree([10, 12, 6, 8])
console.log(isSubStructure(t1, t2))
/* 上面的思路是，找出A树中与B树根节点的值相同的子树list，bfs遍历B树得到strB,和B树节点个数limit，对list中的子树做限制个数（limit）的bfs，
如果其中任意结果=strB，那么就说明有结构相似的 */


var isSubStructure = function (A, B) {
  if (!B) {
    return false
  }
  // 判断树B是否是树A的子结构，可以看成树A的子树与树B一起对比，看看有什么不一样的
  function compare(cur1, cur2) {
    // 如果B树遍历完了，都没有问题，返回true
    if (!cur2) {
      return true
    }
    // 如果A树的子树遍历完了，B还没完（B完了不会走到这）,说明是错的
    if (!cur1) {
      return false
    }
    // 值不相等，直接返回false
    if (cur1.val !== cur2.val) {
      return false
    }

    // 值相等在比较他们的左右节点
    return compare(cur1.left, cur2.left) && compare(cur1.right, cur2.right)
  }
  // 先序遍历
  function pre2(cur) {
    if (!cur) {
      return false
    }
    return compare(cur, B) || pre2(cur.left, B) || pre2(cur.right, B)
  }
  return pre2(A)
};