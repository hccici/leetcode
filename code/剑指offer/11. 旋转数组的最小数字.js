var minArray = function (numbers) {
    let l = 0
    let r = numbers.length - 1
    let m
    while (r > l) {
        m = Math.floor((r + l) / 2)
        if (numbers[m] > numbers[r]) {
            l = m + 1
        } else if (numbers[m] < numbers[r]) {
            r = m
        } else {
            r--
        }
    }
    return numbers[l]
};
console.log(minArray([3, 3, 1, 3]))