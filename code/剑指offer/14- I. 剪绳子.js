/**
 * @param {number} n
 * @return {number}
 */
// 参考 https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/jian-zhi-offer-14-i-jian-sheng-zi-huan-s-xopj/
// var cuttingRope = function (n) {
//     let arr = new Array(n + 1).fill(1) // arr[1] = 1 arr[2] = 1，这是对的，我们接下来要推断3及3往后的 
//     for (let i = 3; i <= n; i++) {
//         // j为减得长度
//         for (let j = 2; j < i; j++) {
//             arr[i] = Math.max(arr[i], (i - j) * j, arr[i - j] * j)// 在max中加arr[i],是因为arr[i]是不断更新的，更新也要取最大的
//         }
//     }
//     return arr[n]
// };
// 也可以用数学推论
var cuttingRope = function(n) {
    if(n === 2) return 1
    if(n === 3) return 2
    if(n % 3 === 0){
        return 3 ** (n / 3)
    }else if(n % 3 === 1){
        return 3 ** (Math.floor(n / 3) - 1) * 4
    }else if(n % 3 === 2){
        return 3 ** Math.floor(n / 3) * 2
    }
};

cuttingRope(10)