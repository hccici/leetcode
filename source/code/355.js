var Twitter = function () {
  this.postList = []
  this.followMap = {}
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.postList.push({
    userId,
    tweetId
  })
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const followList = this.followMap[userId] || []
  const postUserList = [userId, ...followList]
  const postList = []
  let count = this.postList.length - 1
  while (postList.length < 10 && count >= 0) { // 这里有一个坑，如果用length计数的话，达到11时已经添加进数组里面去了
    const cur = this.postList[count]
    if (postUserList.includes(cur.userId)) {
      postList.push(cur.tweetId)
    }
    count--
  }
  return postList
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  const followeeList = this.followMap[followerId];
  if (followeeList) {
    if (!followeeList.includes(followeeId) && followerId !== followeeId) { // 不能关注自己和重复关注
      followeeList.push(followeeId)
    }
  } else {
    this.followMap[followerId] = [followeeId]
  }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  const followeeList = this.followMap[followerId];
  if (followeeList) {
    const index = followeeList.indexOf(followeeId)
    if (index !== -1) {
      followeeList.splice(index, 1)
    }
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */