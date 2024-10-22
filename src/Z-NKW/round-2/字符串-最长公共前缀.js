/**
 * 最长公共前缀【简单】
 * // https://www.nowcoder.com/practice/28eb3175488f4434a4a6207f6f484f47?tpId=295&tqId=732&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode.cn/problems/longest-common-prefix/description/
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param strs string字符串一维数组
 * @return string字符串
 */
function longestCommonPrefix(strs) {
  if (!strs || !strs.length) {
    return '';
  } else if (strs.length === 1) {
    return strs[0];
  } else {
    strs.sort((a, b) => a.length - b.length); // 排序找到最短元素，然后以最短元素去比较后边的元素
    let shortestStr = strs[0];
    let res = '';
    for (let i = 0; i < shortestStr.length; i++) {
      // 以最短字符串为基础，逐个减少末尾字符得到【目标子串】，然后去看这个目标串是否能够匹配所有
      // eg: 最短字符串为 abcd，那就依次用 abcd,abc,ab,a 去尝试，和后边的非最短字符串比较
      const subStr = i > 0 ? shortestStr.slice(0, -i) : shortestStr;
      let isSubStrOK = true;
      // 从第二位字符串开始判断这个【目标子串】，因为第一位不用比（第一位字符串一定是包含了目标子串的）
      for (let j = 1; j < strs.length; j++) {
        const not1st = strs[j];
        // console.log('subStr=', subStr, ',not1st=', not1st);
        if (not1st.startsWith(subStr)) {
          continue;
        } else {
          isSubStrOK = false;
          break;
        }
      }
      //
      if (isSubStrOK) {
        res = subStr;
        break;
      } else {
        continue;
      }
    }
    return res;
  }
}
module.exports = {
  longestCommonPrefix: longestCommonPrefix,
};
