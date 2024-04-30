// https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
/**
左旋转字符串

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"
示例 2：

输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
 
限制：

1 <= k < s.length <= 10000
*/
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  /**
   * 复习下：
   *  s.substring(start, end) 不可以接受负数，截取出来的子串，包含start，但不包含end
   * 【待废弃】s.substr(start,length) 截取出来的子串，包含start，长度为length。以后可能会被 substring 取代
   *  s.slice(start, end) 和 substring 不同，它的end可以接受负数,end不写时，默认为最后末尾
   */
  if (n >= s.length) {
    return s;
  }
  // return `${s.slice(n)}${s.slice(0,n)}`;
  return `${s.substring(n)}${s.substring(0, n)}`; // 性能稍微好于 slice
};
