// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/submissions/
/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 *
 * 示例 1：
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 *
 * 示例 2：
 * 输入：s = "     "
 * 输出："%20%20%20%20"
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.split(/\s/).join('%20');
};

console.log(replaceSpace('     '));
