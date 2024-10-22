/**
 * 反转字符串 【入门】
 * // https://www.nowcoder.com/practice/c3a6afee325e472386a1c4eb1ef987f3?tpId=295&tqId=1024337&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 反转字符串
 * @param str string字符串
 * @return string字符串
 */
function solve(str) {
  return str.split('').reverse().join('');
}

module.exports = {
  solve: solve,
};
