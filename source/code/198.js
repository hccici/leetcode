var rob = function (nums) {
    if (nums.length === 0) {
        return 0
    } else if (nums.length === 1) {
        return nums[0]
    } else if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    } else {
        // 容易知道f(1)、f(2)的值(想象用一个数组记录，然后指针指向最开始两个)
        let lp = nums[0]
        let rp = Math.max(nums[0], nums[1])
        // 依次推算fn的值 f(k)=Max(f(k-1),f(k-2)+ak)
        for (let i = 2; i < nums.length; i++) { // 推算几趟
            let temp = rp
            rp = Math.max(rp, lp + nums[i])
            lp = temp
        }
        return rp
    }
};