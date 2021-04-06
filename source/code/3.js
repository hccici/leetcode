// O(n*n)
var lengthOfLongestSubstring = function (s) {
    let map = new Map()
    let ll = [0];
    let sl = s.split('');
    for (let i = 0; i < sl.length; i++) {
        for (let j = i; j < sl.length; j++) {
            if (!map.get(sl[j])) {
                map.set(sl[j], true)
                if (j === sl.length - 1) {
                    ll.push(map.size)
                    map.clear()
                }
            } else {
                ll.push(map.size)
                map.clear()
                break;
            }
        }
    }
    ll.sort((a, b) => {
        return b - a
    })
    return ll[0]
};
lengthOfLongestSubstring('2')

// o(n)
var lengthOfLongestSubstring = function (s) {
    let lp = 0;
    let maxL = 0;
    let map = new Map()
    for (let rp = 0; rp < s.length; rp++) {
        if (map.has(s[rp]) && map.get(s[rp]) >= lp) { // 出现过并在窗口里
            lp = map.get(s[rp]) + 1
        }
        map.set(s[rp], rp)
        maxL = Math.max(maxL, rp + 1 - lp)
    }
    return maxL
};