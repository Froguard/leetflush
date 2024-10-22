/**
 * 斐波那契数【入门】
 * // https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3?tpId=295&tqId=23255&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 */
function Fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  let fn_1 = 1;
  let fn_2 = 1;
  let fn = fn_1 + fn_2;
  for (let i = 3; i <= n; i++) {
    fn = fn_1 + fn_2;
    fn_2 = fn_1;
    fn_1 = fn;
  }
  return fn;
}

module.exports = {
  Fibonacci: Fibonacci,
};
