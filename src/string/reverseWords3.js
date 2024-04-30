// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
/**
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例：

输入："Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"

提示：

在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = [];
  let res = '';
  for (let c of s) {
    if (c === ' ') {
      res += reverse(str);
      res += c;
      str = [];
    } else {
      str.push(c);
    }
  }
  if (str.length) {
    res += reverse(str);
    str = [];
  }
  return res;
};

function reverse(strArr) {
  return strArr.reverse().join('');
}
