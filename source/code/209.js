/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  //  获取当前窗口的值
  function getValue(lp, rp) {
    return nums.slice(lp, rp + 1).reduce((p, n) => p + n)
  }
  let lp = 0, rp = 0
  // 更新最短的长度
  //  >= target 记录最小长度,缩小窗口，当lp>rp时,rp也一起移动（最后会触发rp超出边缘，退出循环）
  // < target 扩大窗口，当rp到达边缘时就不能移动了
  // 
  let minLength = 100000
  while (rp < nums.length) {
    const curV = getValue(lp, rp)
    if (curV >= target) {
      minLength = Math.min(minLength, (rp + 1 - lp))
      lp++
      if (lp > rp) {
        rp++
      }
    } else {
      /* 
      注意一个问题，如果rp已经到了边界值，但是窗口里的值还是小于target，但是他又扩展不了了，所以要做特殊处理
      1、让lp继续向右移动，直到把rp顶出边界，参考1208
      2、当到达了边界，窗口值还小于target，说明即使让lp继续右移也没有意义了，所以直接退出循环
      */
      if (rp <= nums.length) {
        rp++
      }
    }
  }
  return minLength === 100000 ? 0 : minLength
};
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))