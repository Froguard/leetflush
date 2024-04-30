// https://leetcode-cn.com/problems/implement-strstr/

/**
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:
输入: haystack = "hello", needle = "ll"
输出: 2

示例 2:
输入: haystack = "aaaaa", needle = "bba"
输出: -1

说明:
当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // return haystack.indexOf(needle); // 方法1，可以跑通
  // 方法2，尝试手动实现 indexOf 函数
  if (!needle) {
    return 0;
  }
  if (needle.length > haystack.length) {
    return -1;
  }
  if (needle === haystack) {
    return 0;
  }
  // 方法2.1，split拆分
  let sps = haystack.split(needle);
  if (sps.length <= 1) {
    return -1;
  }
  return sps[0].length;
};

console.log(strStr('hello', 'll'));
