/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = []
  const end = graph.length - 1
  function find(n, path) {
    if (n === end) {
      result.push([...path, n])
    }
    for (let i = 0; i < graph[n].length; i++) {
      find(graph[n][i], [...path, n])
    }
  }
  find(0, [])
  return result
};