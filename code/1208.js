/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
 var equalSubstring = function (s, t, maxCost) {
  const arr = []
  for (let i = 0; i < s.length; i++) {
    arr.push(Math.abs(s[i].charCodeAt() - t[i].charCodeAt()))
  }

  function getTotal(lp, rp) {
    let total = 0
    for (let i = lp; i <= rp; i++) {
      total += arr[i]
    }
    return total
  }
  let maxLength = 0
  function setMaxLength(lp, rp) {
    let length = rp + 1 - lp
    if (length > maxLength) {
      maxLength = length
    }
  }
  let lp = 0, rp = 0
  while (rp < arr.length) {
    const cost = getTotal(lp, rp)
    // 记录
    if (cost <= maxCost) {
      setMaxLength(lp, rp)
    }
    // 缩小范围(过大缩小、到顶缩小)
    if (cost > maxCost ) {
      lp++
      // 扩大范围 
    } else {
      rp++
    }
  }
  return maxLength
};
equalSubstring('krpgjbjjznpzdfy', 'nxargkbydxmsgby', 14)