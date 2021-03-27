var isValid = function (s) {
    var left = ['(', '[', '{']
    var right = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    var arr = s.split('')
    var stack = []
    for (var i = 0; i < arr.length; i++) {
        if (left.includes(arr[i])) {
            stack.push(arr[i])
        } else {
            if (stack[stack.length - 1] === right[arr[i]]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};