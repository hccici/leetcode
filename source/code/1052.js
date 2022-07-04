/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  // 已经满意了的
  let already = 0
  // 能够改变的
  const cc = new Array(customers.length).fill(0)
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 1) {
      cc[i] = customers[i]
    } else {
      already += customers[i]
    }
  }
  // 使用滑动窗口去收集能改变的最大值
  let wv = 0
  for (let i = 0; i < minutes; i++) {
    wv += cc[i]
  }
  let max = wv
  for (let i = 0; i < cc.length - minutes; i++) {
    wv -= cc[i]
    wv += cc[i + minutes]
    if (max < wv) {
      max = wv
    }
  }
  return already + max
};
maxSatisfied([8, 8], [1, 0], 2)