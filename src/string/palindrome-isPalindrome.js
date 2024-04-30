// https://leetcode-cn.com/problems/valid-palindrome/
/**

验证回文串

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true

示例 2:
输入: "race a car"
输出: false
 */

function isAtoZOrNum(char) {
  if (!char) {
    return false;
  }
  return char.match(/[0-9a-zA-Z]/);
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cs = s
    .split('')
    .filter(c => isAtoZOrNum(c))
    .map(c => c.toLowerCase());
  if (cs.length === 1) {
    return true;
  } else if (cs.length === 2) {
    return cs[0] === cs[1];
  }
  // 方法一
  let csr = [...cs].reverse();
  return cs.join('') === csr.join('');

  // 方法二
  /*
    const lastIndex = cs.length - 1,
        range = Math.floor(cs.length / 2);
    for (let i = 0; i < range; i++) {
        let c = cs[i];
        let cr = cs[lastIndex-i];
        if (c!==cr) {
            return false;
            // break;
        }
    }
    return true;
    */
};

// true
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('121'));

console.log('---');

// false
console.log(isPalindrome('race a car'));
console.log(isPalindrome('OP'));
console.log(isPalindrome('123'));
