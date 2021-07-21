/**
 * @param {number[]} height
 * @return {number}
 */
/* var maxArea = function (height) {
  let max = -1
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = height.length - 1; j > i; j--) {
      max = Math.max(max, (j - i) * Math.min(height[j], height[i]))
    }
  }
  return max
}; */
// 上面超时了
/* 
var maxArea = function (height) {
  let max = -1
  let step = height.length - 1
  while (step >= 1) {
    for (let i = 0; i < height.length - step; i++) {
      max = Math.max(max, step * Math.min(height[i], height[i + step]))
    }
    step--
  }
  return max
}; */
// 上面超时了

var maxArea = function (height) {
  let li = 0;
  let ri = height.length - 1;
  let max = -1
  while (ri > li) {
    max = Math.max(max, (ri - li) * Math.min(height[ri], height[li]))
    if (height[ri] >= height[li]) {
      li++
    } else {
      ri--
    }
  }
  return max
};