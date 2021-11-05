var MyCalendar = function () {
  this.list = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.list.length === 0) {
    this.list.push([start, end])
    return true
  }
  const result = this.bs(start, end)
  if (typeof result === 'boolean') { // 有交集返回false
    return false
  } else { // 插入
    if (start >= this.list[result][1]) {
      this.list.splice(result + 1, 0, [start, end])
    } else {
      this.list.splice(result, 0, [start, end])
    }
    return true
  }
};
// 二分查找 是否有交集:有交集返回true，无交集，返回最接近的
MyCalendar.prototype.bs = function (start, end) {
  let leftIndex = 0;
  let rightIndex = this.list.length - 1;
  let midIndex
  while (leftIndex <= rightIndex) {
    midIndex = Math.floor((leftIndex + rightIndex) / 2)
    // 有交集
    if (start >= this.list[midIndex][1]) { // 无交集
      leftIndex = midIndex + 1
    } else if (end <= this.list[midIndex][0]) { // 无交集
      rightIndex = midIndex - 1
    } else { //有交集
      return true
    }
  }
  return midIndex
}
/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
const arr = [[47, 50], [33, 41], [39, 45], [33, 42], [25, 32], [26, 35], [19, 25], [3, 8], [8, 13], [18, 27]]
const s = new MyCalendar()
arr.forEach((item, index) => {
  if (index === 9) {
    debugger;
  }
  s.book(item[0], item[1])
})
