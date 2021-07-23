/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  //  首先把单词去重
  const set = new Set(wordList)
  // 因为单词接龙路径是一颗树形结构，所以可以使用bfs去遍历生成路径
  const queue = [[beginWord, 1]]
  while (queue.length) {
    const [curWord, level] = queue.shift()
    // 查看可以接当前单词的单词都有哪些
    // 列举可变更的所有单词，如果在单词表中找到，说明它是子节点，推入队列
    for (let i = 0; i < curWord.length; i++) {
      for (let j = 97; j <= 122; j++) {
        const newWord = curWord.slice(0, i) + String.fromCharCode(j) + curWord.slice(i + 1)
        if (set.has(newWord)) {
          // 如果找到了就直接返回了，因为是bfs，所以后面能找到的，长度要不相等要不大于
          if (newWord === endWord) {
            return level + 1
          }
          // 使用过就能去掉了，1是避免重复使用，2是即使通过其它路径也可以转变为这个单词，但是转换长度是一样的，可以不用关心
          queue.push([newWord, level + 1])
          set.delete(newWord) // !BFS 找路径长度很重要的一步
        }
      }
    }
  }
  return 0
};
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]))