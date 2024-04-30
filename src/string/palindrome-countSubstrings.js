// https://leetcode-cn.com/problems/palindromic-substrings
/**
回文子串的数量

给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

示例 1：
输入："abc"
输出：3
解释：三个回文子串: "a", "b", "c"

示例 2：
输入："aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 
提示：
输入的字符串长度不会超过 1000 。
*/
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length == 1) {
    return 1;
  }
  // 方法一，循环
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      let tarS = s.slice(i, j);
      if (isPalindrome(tarS)) {
        count++;
      }
    }
  }
  return count;
  // TODO：方法二，动态规划
};
function isPalindrome(s) {
  // 方法一：更高性能的方式去判断是否为回文
  const lastIndex = s.length - 1,
    range = Math.floor(s.length / 2);
  for (let i = 0; i < range; i++) {
    let c = s[i];
    let cr = s[lastIndex - i];
    if (c !== cr) {
      return false;
    }
  }
  return true;

  // 方法二，采用reverse去判断回文，性能较差
  // let cs = s.split('').map(c=>c.toLowerCase());
  // let csr = [...cs].reverse();
  // return cs.join('') === csr.join('');
}
