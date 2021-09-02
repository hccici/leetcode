/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  var vs1 = version1.split('.')
  var vs2 = version2.split('.')
  let i = 0
  while (vs1[i] || vs2[i]) {
    var a = vs1[i] || '0'
    var b = vs2[i] || '0'
    if (parseInt(a) > parseInt(b)) {
      return 1
    }
    if (parseInt(a) < parseInt(b)) {
      return -1
    }
    i++
  }
  return 0
};