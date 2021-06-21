/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    // 初始化课程信息
    const courseList = new Array(numCourses).fill(1).map(()=>{
     return {
        effectList: [],
        preCource: 0
      }
    })
    prerequisites.forEach(([a,b])=>{
      courseList[a].preCource++
      courseList[b].effectList.push(a)
    })
    // 把前置课程为0的推入学习队列
    const learnList = []
    courseList.forEach(item=>{
      if(item.preCource===0){
        learnList.push(item)
      }
    })
    // 开始学习，如果期间有前置课程为0的推入学习队列，知道学习队列为空
    while(learnList.length > 0){
      const curLearn = learnList.shift()
      curLearn.effectList.forEach(i=>{
        courseList[i].preCource--
        if(courseList[i].preCource===0){
          learnList.push(courseList[i])
        }
      })
    }
    // 遍历课程表，如果preCource都为0，说明都学了
    for(let item of courseList){
      if(item.preCource!==0){
        return false
      }
    }
    return true
};
canFinish(2,[[1,0]])