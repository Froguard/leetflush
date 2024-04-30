// https://leetcode-cn.com/problems/first-unique-character-in-a-string/
/**
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:
s = "abaccdeff"
返回 "b"

s = ""
返回 " "
 
限制：
0 <= s 的长度 <= 50000
*/

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (s === '') {
    return ' ';
  }
  let ss = s.split('');
  let checked = [];
  let tmp = ss.shift();
  while (tmp) {
    if (!ss.includes(tmp) && !checked.includes(tmp)) {
      break;
    } else {
      checked.push(tmp);
      tmp = ss.shift();
    }
  }
  return tmp || ' ';
};
