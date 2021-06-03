/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  //  通过观察发现，每次想要射穿更多的气球，都会包含气球的右边缘的点
  // 我们根据气球的右边缘进行排序
  const newPoint = points.sort((a, b) => {
    return a[1] - b[1]
  })
  // 再不遗漏掉气球的前提下，射出弩箭
  let isAllB = false
  let count = 0
  while (!isAllB) {
    let x
    // 每次取第一个非空的气球，确保前面的都能被射爆
    for (let i = 0; i < newPoint.length; i++) {
      if (newPoint[i]) {
        x = newPoint[i][1]
        newPoint[i] = null
        break
      }
    }
    //如果取不到气球了，说明全部射爆了
    if (!x) {
      isAllB = true
      break
    }
    count++
    // 把能被射爆的气球都设置为null
    for (let i = 0; i < newPoint.length; i++) {
      if (newPoint[i] && newPoint[i][0] <= x) {
        newPoint[i] = null
      }
    }
  }
  return count
};
findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])