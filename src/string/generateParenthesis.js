// https://leetcode-cn.com/problems/generate-parentheses
/**
括号生成，括号对

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n == 1) {
    return ['()'];
  }
  let res = new Set();

  // leftCount 和 rightCount 记录已经被消耗掉的左右括号的数量
  // ansStr 表示排好的字符串结果
  function generate(ansStr, leftCount, rightCount) {
    if (leftCount > n || rightCount > n) {
      return;
    }
    if (leftCount == n && rightCount == n) {
      res.add(ansStr);
    }
    if (leftCount >= rightCount) {
      generate(ansStr + '(', leftCount + 1, rightCount);
      generate(ansStr + ')', leftCount, rightCount + 1);
    }
  }
  generate('', 0, 0);
  return [...res];
};
