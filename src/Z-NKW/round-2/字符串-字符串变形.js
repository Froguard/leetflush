/**
 * 字符串变形【简单】
 * // https://www.nowcoder.com/practice/c3120c1c1bc44ad986259c0cf0f0b80e?tpId=295&tqId=44664&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @param n int整型
 * @return string字符串
 */
function trans(s, n) {
  const words = s.split(' ');
  return words
    .reverse()
    .map(s => reverseCaseWord(s))
    .join(' ');
}

function reverseCase(char) {
  if (char.match(/[a-z]/)) {
    return char.toUpperCase();
  }
  return char.toLowerCase();
}

function reverseCaseWord(str) {
  return str
    .split('')
    .map(c => reverseCase(c))
    .join('');
}

module.exports = {
  trans: trans,
};
