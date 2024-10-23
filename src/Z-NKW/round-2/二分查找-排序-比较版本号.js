/**
 * 比较版本号【中等】
 * // https://www.nowcoder.com/practice/2b317e02f14247a49ffdbdba315459e7?tpId=295&tqId=1024572&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return int整型
 */
function compare(version1, version2) {
  const ver1 = version1.split('.');
  const ver2 = version2.split('.');
  const LEN = Math.max(ver1.length, ver2.length);
  for (let i = 0; i < LEN; i++) {
    const n1 = parseInt(ver1[i]) || 0;
    const n2 = parseInt(ver2[i]) || 0;
    if (n1 === n2) {
      continue;
    } else {
      return n1 > n2 ? 1 : -1;
    }
  }
  return 0;
}
module.exports = {
  compare: compare,
};
