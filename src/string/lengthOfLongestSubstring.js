// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
  if (!s.length) {
    return 0;
  }
  let tmp = new Map(); // new Set(); // 用一个map存放位置角标
  let max = 0;
  let i = 0,
    c;
  while (i < s.length) {
    c = s[i];
    if (tmp.has(c)) {
      max = Math.max(tmp.size, max);
      // while(s[i-1] != c && i > 0) { i--; }
      i = tmp.get(c) + 1; // 当发现字符重复的时候，重置的未知节点应该是从该字符算起
      tmp.clear();
      continue;
    } else {
      tmp.set(c, i);
      i++;
    }
  }
  // console.log(tmp);
  return Math.max(max, tmp.size);
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  if (!s.length) {
    return 0;
  }
  let tmp = new Set();
  let max = 0;
  let i = 0,
    c;
  while (i < s.length) {
    c = s[i];
    if (tmp.has(c)) {
      max = Math.max(tmp.size, max);
      while (s[i - 1] != c && i > 0) {
        i--;
      }
      tmp.clear();
      continue;
    } else {
      tmp.add(c);
      i++;
    }
  }
  return Math.max(max, tmp.size);
};
