// /* 解法一：暴力解法，时间复杂度：update O(1) sumRange O(n) ,超时了,通过11/15*/
// var NumArray = function (nums) {
//   this.list = nums
// };
// NumArray.prototype.update = function (index, val) {
//   this.list[index] = val
// };
// NumArray.prototype.sumRange = function (left, right) {
//   let temp = 0;
//   for (let i = left; i <= right; i++) {
//     temp += this.list[i]
//   }
//   return temp
// };


// /* 解法二：前缀和 + buffer优化，时间复杂度：update O(n) sumRange O(1)，超时了，通过11/15 */
// var NumArray = function (nums) {
//   this.list = [...nums]
//   // 计算前缀和初始化buffer
//   this.init()
// };
// NumArray.prototype.update = function (index, val) {
//   // 超出长度（1000可以自己设置），一次更新1000条，不用每次都更新
//   if (this.bufferSize > 1000) {
//     for (const key in this.buffer) {
//       this.list[key] += this.buffer[key]
//     }
//     // ! 这个别漏了
//     this.list[index] = val
//     // 重新计算前缀和初始化buffer
//     this.init()
//   } else {
//     // 先用buffer储存更新带来的变化
//     const sub = val - this.list[index]
//     this.buffer[index] = sub
//     this.bufferSize++
//   }
// };
// NumArray.prototype.sumRange = function (left, right) {
//   // ! 取值应该注意
//   let temp
//   if (left - 1 < 0) {
//     temp = this.accumulateList[right]
//   } else {
//     temp = this.accumulateList[right] - this.accumulateList[left - 1]
//   }
//   // buffer影响
//   for (const key in this.buffer) {
//     if (key >= left && key <= right) {
//       temp += this.buffer[key]
//     }
//   }
//   return temp
// };

// NumArray.prototype.init = function () {
//   // 前缀和
//   this.accumulateList = []
//   this.list.reduce((pre, next) => {
//     pre += next
//     this.accumulateList.push(pre)
//     return pre
//   }, 0)
//   // buffer 优化
//   this.buffer = {}
//   this.bufferSize = 0 // 注意这里是使用次数，不是存储长度
// }

/* 解法三：线段树，时间复杂度：update O(logn) sumRange O(logn)，通过 */
class TreeNode {
  constructor() {
    this.leftChildren = null
    this.rightChildren = null
    this.leftIndex = null
    this.rightIndex = null
    this.sum = 0
  }
}
class SegmentTree {
  constructor(nums) {
    this.nums = nums
    this.root = this.buildTree(0, nums.length - 1)
  }
  buildTree(leftIndex, rightIndex) {
    // 1、创建节点
    const cur = new TreeNode()
    // 2、赋值左右边界值
    cur.leftIndex = leftIndex
    cur.rightIndex = rightIndex
    // 3、递归出口
    if (leftIndex === rightIndex) {
      cur.sum = this.nums[leftIndex]
      return cur
    }
    // 4、递归、连接左右孩子节点、计算sum
    const midIndex = Math.floor((leftIndex + rightIndex) / 2)
    cur.leftChildren = this.buildTree(leftIndex, midIndex)
    cur.rightChildren = this.buildTree(midIndex + 1, rightIndex)
    cur.sum = cur.leftChildren.sum + cur.rightChildren.sum
    return cur
  }
}

var NumArray = function (nums) {
  this.tree = new SegmentTree(nums).root
};
NumArray.prototype.update = function (index, val) {
  this._update(this.tree, index, val)
};
NumArray.prototype._update = function (curNode, index, val) {
  // 递归出口
  if (curNode.leftIndex === index && curNode.rightIndex === index) {
    curNode.sum = val
    return
  }
  const mid = Math.floor((curNode.leftIndex + curNode.rightIndex) / 2)
  if (index <= mid) { // 1、在左边
    this._update(curNode.leftChildren, index, val)
  } else { // 2、在右边
    this._update(curNode.rightChildren, index, val)
  }
  // 向上更新
  curNode.sum = curNode.leftChildren.sum + curNode.rightChildren.sum
}
NumArray.prototype.sumRange = function (left, right) {
  return this.find(this.tree, left, right)
};
NumArray.prototype.find = function (curNode, left, right) {
  // 递归出口
  if (curNode.leftIndex === left && curNode.rightIndex === right) {
    return curNode.sum
  }
  const mid = Math.floor((curNode.leftIndex + curNode.rightIndex) / 2)
  if (right <= mid) { // 1、全在左边
    return this.find(curNode.leftChildren, left, right)
  } else if (left > mid) { // 2、全在右边
    return this.find(curNode.rightChildren, left, right)
  } else { // 3、横跨左右
    return this.find(curNode.leftChildren, left, mid) + this.find(curNode.rightChildren, mid + 1, right)
  }
}
const arr = new NumArray([1, 2, 3, 4, 5, 6])
console.log(arr.sumRange(3, 4))
arr.update(4, 6)
console.log(arr.sumRange(3, 4))