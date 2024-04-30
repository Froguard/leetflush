// https://leetcode-cn.com/problems/longest-palindromic-substring
/**
最长回文子串 / 最大回文子串

给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 1) {
    return s;
  }
  // 方法一，循环暴力求解
  let max = 1;
  let maxOne = s[0];
  for (let i = 0; i < s.length; i++) {
    // 对于 (j-i) < max 的部分没有必要判断，要做剪枝操作
    for (let j = s.length; j >= i && j - i >= max; j--) {
      let tarS = s.slice(i, j);
      if (isPalindrome(tarS)) {
        if (tarS.length > max) {
          max = tarS.length;
          maxOne = tarS;
        }
      }
    }
  }
  return maxOne;

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
