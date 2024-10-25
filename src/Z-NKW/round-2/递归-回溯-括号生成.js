/**
 * 括号生成
 * // https://www.nowcoder.com/practice/c9addb265cdf4cdd92c092c655d164ca?tpId=295&tqId=725&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 * // https://leetcode-cn.com/problems/generate-parentheses
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return string字符串一维数组
 */
function generateParenthesis(n) {
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
}
module.exports = {
  generateParenthesis: generateParenthesis,
};
