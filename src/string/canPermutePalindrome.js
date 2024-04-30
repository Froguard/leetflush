// https://leetcode-cn.com/problems/palindrome-permutation-lcci
/**
回文排列

给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

回文串不一定是字典当中的单词。

示例1：
输入："tactcoa"
输出：true（排列有"tacocat"、"atcocta"，等等）
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  if (s.length <= 1) {
    return true;
  }
  // 计算出每个字符出现的次数
  let counter = Object.create(null);
  for (let c of s) {
    if (counter[c] === undefined) {
      counter[c] = 1;
    } else {
      counter[c] += 1;
    }
  }
  // 当出现次数为奇数次的元素字符，这样的字符种类，超过1时，则没办法组成回文
  // 1. 没有出现奇数次数的字符，则左右摆放就一定可以成回文  如 aabb => abba (或baab)，a和b两种字符，均只出现两次
  // 2. 出现了奇数次数的字符，这样的字符只有一个，则可以把这种字符全部放在最中间，然后剩下的其他字符左右对称摆放即可 如 aabbc => abcba (或bacab) 出现次数奇数的有 c（1次）放中间即可
  let ok = true;
  let odds = 0;
  for (let [k, v] of Object.entries(counter)) {
    if (v % 2 !== 0) {
      odds += 1;
    }
    if (odds > 1) {
      ok = false;
      break;
    }
  }
  return ok;
};
