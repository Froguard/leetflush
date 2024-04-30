// https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
/**
给定一个字符串，找到它的第一个不重复的字符
- 并返回它的「索引」
- 如果不存在，则返回 -1。

 

示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2

提示：
- 你可以假定该字符串只包含小写字母。
- 输入的字符串长度会非常的长！

*/

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (s === '') {
    return -1;
  }
  let checked = '';
  let tmp, i;
  const len = s.length;
  for (i = 0; i < len; i++) {
    tmp = s[i];
    if (!s.substr(i + 1).includes(tmp) && !checked.includes(tmp)) {
      break;
    } else {
      checked += tmp;
    }
  }
  return i >= len ? -1 : i;
};
