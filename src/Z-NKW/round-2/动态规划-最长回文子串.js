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
  // 方法1，循环暴力求解

  let max = 1; // 存长度
  // let maxOne = s[0]; // 存结果
  for (let i = 0; i < s.length; i++) {
    // 对于 (j-i) < max 的部分没有必要判断，要做剪枝操作
    for (let j = s.length; j >= i && j - i > max; j--) {
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

  /*
  // 方法2，优化后算法：内存占用减小，速度也上来了
  let max = 1;
  for (let i = 0; i < s.length; i++) {
      max = Math.max(max, getSubLen(i, i), getSubLen(i, i + 1));
  }
  function getSubLen(l, r) {
      // 由区间[l,r]向外扩散去判断回文长度，这样不需要判断整个字符
      while (0 <= l && r <= s.length) {
          if (s[l] === s[r]) {
              l--;
              r++;
          } else {
              break;
          }
      }
      return r - l - 1; // return r - (l + 1);
  }
  return max;
  */
}

function isPalindrome(s) {
  // 判断回文方法1：双指针循环
  const lastIndex = s.length - 1;
  let l = 0,
    r = lastIndex;
  let res = true;
  while (l <= r && r >= 0) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      res = false;
      break;
    }
  }
  return res;

  // 判断回文方法2：常规循环去判断是否为回文
  // const lastIndex = s.length - 1,
  //     range = Math.floor(s.length / 2);
  // for (let i = 0; i < range; i++) {
  //     let c = s[i];
  //     let cr = s[lastIndex - i];
  //     if (c !== cr) {
  //         return false;
  //     }
  // }
  // return true;

  // 判断回文方法3，采用reverse去判断回文，性能较差
  // let cs = s.split('').map(c=>c.toLowerCase());
  // let csr = [...cs].reverse();
  // return cs.join('') === csr.join('');
}

module.exports = {
  getLongestPalindrome: getLongestPalindrome,
};
