// 这里需要用到fs读取文件
const fs = require('fs')
const content = fs.readFileSync(0).toString().trim().split(/\r|\n|\r\n/)
function get(length, arr) {
  const reg1 = /^[a-zA-Z]/
  const reg2 = /^[a-zA-Z0-9]*$/
  const reg3 = /\d/
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (reg1.test(element) && reg2.test(element) && reg3.test(element)) {
      console.log('Accept')
    } else {
      console.log('Wrong')
    }
  }
}
get(content[0], content.slice(1))