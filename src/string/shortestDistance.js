// https://leetcode-cn.com/problems/shortest-word-distance
/**
给定一个单词列表和两个单词 word1 和 word2，返回列表中这两个单词之间的最短距离。

示例:
假设 words = ["practice", "makes", "perfect", "coding", "makes"]

输入: word1 = “coding”, word2 = “practice”
输出: 3
输入: word1 = "makes", word2 = "coding"
输出: 1
注意:
你可以假设 word1 不等于 word2, 并且 word1 和 word2 都在列表里。
*/

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
  let pos1 = [];
  let pos2 = [];
  for (let i = 0; i < wordsDict.length; i++) {
    let w = wordsDict[i];
    if (w === word1) {
      pos1.push(i);
    }
    if (w === word2) {
      pos2.push(i);
    }
  }
  let min = Infinity;
  for (let p1 of pos1) {
    for (let p2 of pos2) {
      let dis = Math.abs(p1 - p2);
      min = Math.min(dis, min);
    }
  }
  return min;
};
