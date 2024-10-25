/**
 * 最长回文子串
 * // https://www.nowcoder.com/practice/b4525d1d84934cf280439aeecc36f4af?tpId=295&tqId=25269&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 * // https://leetcode-cn.com/problems/longest-palindromic-substring
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 */
function getLongestPalindrome(s) {
  if (s.length == 1) {
    return 1;
  }
  // 方法一，循环暴力求解
  let max = 1; // 存长度
  // let maxOne = s[0]; // 存结果
  for (let i = 0; i < s.length; i++) {
    // 对于 (j-i) < max 的部分没有必要判断，要做剪枝操作
    for (let j = s.length; j >= i && j - i >= max; j--) {
      let tarS = s.slice(i, j);
      if (isPalindrome(tarS)) {
        if (tarS.length > max) {
          max = tarS.length;
          // maxOne = tarS;
        }
      }
    }
  }
  // return maxOne;
  return max;
}

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

module.exports = {
  getLongestPalindrome: getLongestPalindrome,
};
