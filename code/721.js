/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
class UnionFind {
  constructor(length) {
    this.arr = new Array(length).fill(0).map((item, index) => index)
  }
  union(left, right) {
    this.arr[this.find(right)] = this.find(left)
  }
  find(index) {
    let parent = this.arr[index]
    if (parent === index) {
      return parent
    } else {
      return this.find(parent)
    }
  }
}
var accountsMerge = function (accounts) {
  // 拿到所有的不重复的email，每个email可能都代表一个人
  const emails = []
  const names = []
  for (const acc of accounts) {
    const name = acc[0]
    for (let i = 1; i < acc.length; i++) {
      // 去重，因为相同的email肯定是同一个人，也为简化了联通分量，把相同账号的归为一个实例
      if (!emails.includes(acc[i])) {
        emails.push(acc[i])
        names.push(name)
      }
    }
  }
  const uf = new UnionFind(emails.length)
  // 把相关连email连起来
  for (let i = 0; i < accounts.length; i++) {
    const acc = accounts[i];
    const left = acc[1]
    for (let j = 2; j < acc.length; j++) {
      uf.union(emails.indexOf(left), emails.indexOf(acc[j]))
    }
  }
  // 再根据联通分量，拼接好数据
  // ! 注意并不是一个集群的所有子节点都连到了根节点
  let result = {}
  for (let i = 0; i < emails.length; i++) {
    const root = uf.find(i)
    if (result[root]) {
      result[root].emails.push(emails[i])
    } else {
      result[root] = { name: names[root], emails: [emails[i]] }
    }
  }
  // 去重
  return Object.keys(result).map(key => {
    return [result[key].name, ...result[key].emails.sort()]
  })
};
const accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
console.log(accountsMerge(accounts))