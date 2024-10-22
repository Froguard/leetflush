/**
 * 判断是否为回文字符串【入门】
 * // https://www.nowcoder.com/practice/e297fdd8e9f543059b0b5f05f3a7f3b2?tpId=295&tqId=1089616&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串 待判断的字符串
 * @return bool布尔型
 */
function judge(str) {
  let isOk = true;
  const LEN = str.length;
  for (let i = 0; i <= LEN / 2; i++) {
    const left = str[i];
    const right = str[LEN - 1 - i];
    if (left === right) {
      continue;
    } else {
      isOk = false;
      break;
    }
  }
  return isOk;
}

module.exports = {
  judge: judge,
};
