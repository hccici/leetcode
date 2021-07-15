/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  const tables = []
  const dishNames = []
  const map = {}
  for (let [name, tableNum, dishName] of orders) {
    tables.includes(tableNum) || tables.push(tableNum)
    dishNames.includes(dishName) || dishNames.push(dishName)
    map[dishName] || (map[dishName] = {})
    map[dishName][tableNum] ? map[dishName][tableNum]++ : map[dishName][tableNum] = 1
  }
  // 排序
  tables.sort((a, b) => {
    return parseInt(a) - parseInt(b)
  })
  dishNames.sort()
  // 拼装
  const result = []
  for (let tableNum of tables) {
    const temp = [tableNum]
    for (let dishName of dishNames) {
      temp.push(map[dishName][tableNum] ? map[dishName][tableNum] + '' : '0')
    }
    result.push(temp)
  }
  result.unshift(['Table', ...dishNames])
  return result
};

const a = [["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]]
console.log(displayTable(a))