/**
 * 表达式求职【中等】
 * // https://www.nowcoder.com/practice/c215ba61c8b1443b996351df929dc4d4?tpId=295&tqId=1076787&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 返回表达式的值
 * @param s string字符串 待计算的表达式
 * @return int整型
 */
function solve(s) {
  // 方法1：eval
  // return eval(s.trim());
  // 方法2：new Function (性能和安全性都比eval快一些)
  return new Function(`return ${s.trim()};`)();
  // 方法3：采用栈方式
  //...
  // 方法4：AST思路，将表达式一次解析 token->node->dfs递归AST求值
  //...
}

module.exports = {
  solve: solve,
};
