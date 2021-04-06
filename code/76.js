/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let minStr = '';
    let need = {}
    for (let c of t) {
        if (need[c]) {
            need[c].wish++
        } else {
            need[c] = {
                wish: 1,
                get: 0
            }
        }
    }
    // 检查是否满足t
    function check(c) {
        for (let key in need) {
            let o = need[key]
            if (o.get < o.wish) {
                return false
            }
        }
        return true
    }
    let lp = 0;
    let rp = 0;
    while (rp < s.length) {
        let c = s[rp]
        let lpMove = false
        if (need[c]) {
            need[c].get++
            lpMove = check()
        }
        // 如果满足了t的字符，左指针移动缩减字符串长度
        while (lpMove) {
            // 移动前的字符
            let c1 = s[lp]
            if (need[c1]) {
                need[c1].get--
                lpMove = check()
                // 因为左指针移动后就不能满足条件了，所以这时候的子字符串有可能是最短的
                if (!lpMove) {
                    let newStr = s.substring(lp, rp + 1)
                    if (minStr === '') {
                        minStr = newStr
                    }
                    if (newStr.length < minStr.length) {
                        minStr = newStr
                    }
                }
            }
            lp++
        }
        rp++
    }
    return minStr
};
console.log(minWindow('ADOBECODEBANC', 'G'))