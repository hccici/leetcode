/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  //  创建一个数组记录每门课的入度，key: 课号，value：入度
  const degreeList = new Array(numCourses).fill(0)
  // 创建一个map记录课之间的依赖，key：课号，value：依赖于本课的课号数组
  const map = {}
  // 遍历先决条件，初始化
  for (let i = 0; i < prerequisites.length; i++) {
    // 要依赖的课程，入度加一
    degreeList[prerequisites[i][0]]++
    // 记录依赖关系
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0])
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }
  const queue = []
  const result = []
  // 初始化，把入度为0的课程推进队列
  for (let i = 0; i < degreeList.length; i++) {
    if (degreeList[i] === 0) {
      queue.push(i)
    }
  }
  // 把入度为0的课程放进结果集中，表示学完了这门课。同时减少学完这门口后他的关联课程的入度，如果课程的入度为空推进队列，当队列为空后，就表示把能学的都学了
  while (queue.length) {
    const curLearn = queue.shift()
    result.push(curLearn)
    // 查询map，修改后续课程的入度
    const nextCourses = map[curLearn]
    if (nextCourses) {
      nextCourses.forEach(item => {
        degreeList[item]--
        // 如果影响到的这门课入度为0，表示它可以学习了，推进队列
        if (degreeList[item] === 0) {
          queue.push(item)
        }
      })
    }
  }

  return result.length === numCourses ? result : []
};
findOrder(2, [[0,1],[1,0]])