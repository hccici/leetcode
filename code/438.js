/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = []
  // 用一个map来记录p所需要的字符
  const pMap = new Map()
  p.split('').forEach(c => {
    pMap.set(c, pMap.has(c) ? pMap.get(c) + 1 : 1)
  })
  // 用一个map来记录滑动窗口拥有的字符
  const wMap = new Map()
  // 用过一个数来记录匹配上p字符的种类数，例如p有2个'c'，窗口中也有两个'c'了，valid++
  let valid = 0
  // 初始化它
  for (let i = 0; i < p.length; i++) {
    wMap.set(s[i], wMap.has(s[i]) ? wMap.get(s[i]) + 1 : 1)
    if (pMap.has(s[i]) && wMap.get(s[i]) === pMap.get(s[i])) {
      valid++
    }
  }
  // 窗口开始向右移动
  let left = 0
  let right = p.length - 1
  while (right < s.length) {
    if (valid === pMap.size) {
      result.push(left)
    }
    
    if (pMap.has(s[left]) && wMap.get(s[left]) === pMap.get(s[left])) {
      valid--
    }
    wMap.set(s[left], wMap.get(s[left]) - 1)
    left++
    
    right++
    wMap.set(s[right], wMap.has(s[right]) ? wMap.get(s[right]) + 1 : 1)
    if (pMap.has(s[right]) && wMap.get(s[right]) === pMap.get(s[right])) {
      valid++
    }
  }
  return result
};
findAnagrams("cbaebabacd", "abc")