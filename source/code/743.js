/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// Floyd
/* var networkDelayTime = function (times, n, k) {
  // 用邻接矩阵存图
  const map = new Array(n + 1).fill(1).map(() => new Array(n + 1).fill(Infinity))
  for (let i = 1; i <= n; i++) {
    map[i][i] = 0
  }
  // 初始化
  for (let time of times) {
    const [s, e, v] = time
    map[s][e] = v
  }
  // 使用Floyd算法，计算任一节点到各个节点的权值
  function floyd() {
    // 中转点为k
    for (let k = 1; k <= n; k++) {
      // 开始更新
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          if (i !== j && k !== i && k !== j && map[i][k] + map[k][j] < map[i][j]) {
            map[i][j] = map[i][k] + map[k][j]
          }
        }
      }
    }
  }
  floyd()
  // 查看k节点出发，信号到达所有节点所耗费的最长时间
  let min = 0
  for (let i = 1; i <= n; i++) {
    (map[k][i] > min) && (min = map[k][i])
  }
  return min == Infinity ? -1 : min
}; */


// 朴素Dijkstra
var networkDelayTime = function (times, n, k) {
  // 用邻接矩阵存图
  const map = new Array(n + 1).fill(1).map(() => new Array(n + 1).fill(Infinity))
  for (let i = 1; i <= n; i++) {
    map[i][i] = 0
  }
  // 初始化
  for (let time of times) {
    const [s, e, v] = time
    map[s][e] = v
  }
  function dijkstra() {
    // 使用一个数组记录从起点到各个点的消耗，初始为无穷大，index为点号，value为起点k到该点的消耗
    const dist = new Array(n + 1).fill(Infinity)
    // 使用一个数组来标记从起点到各个点是否已是最短路径，初始为false,index为点号，value为一个boolean
    const okArr = new Array(n + 1).fill(false)
    /* 
    核心思想：
    1、利用贪心的思想，每次先访问k到i消耗最小的节点，并标记为最短路近，同时更新新加入节点后，以新节点为中转点，k到达其它节点的消耗。
    2、重复1步骤知道所有的节点被标记为最短路径。
    */
    // 已知k->k为0
    dist[k] = 0
    // 重复n个节点
    for (let p = 1; p <= n; p++) {
      // 找到当前距离k消耗最小的节点（k自己也算）（排除已添加进最短路径的）
      let min = Infinity
      let minIndex = -1
      for (let i = 1; i <= n; i++) {
        if (!okArr[i] && min > dist[i]) {
          min = dist[i]
          minIndex = i
        }
      }
      // 有可能有K到达不了的节点，提前退出循环
      if (minIndex === -1) {
        break;
      }
      // 标记为最短路径
      okArr[minIndex] = true
      // 更新dist新加入节点的其它相邻节点的消耗（比小的才更新）
      for (let j = 1; j <= n; j++) {
        if (minIndex !== j && map[minIndex][j] < Infinity) {
          dist[j] = Math.min(dist[minIndex] + map[minIndex][j], dist[j])
        }
      }
    }
    return dist
  }
  // k达到其它各个节点的消耗
  const arr = dijkstra()
  let maxTime = arr[1]
  for (let i = 2; i <= n; i++) {
    maxTime = Math.max(maxTime, arr[i])
  }
  return maxTime == Infinity ? -1 : maxTime
};
const times = [[1, 2, 1], [2, 1, 3]]
networkDelayTime(times, 3, 2)