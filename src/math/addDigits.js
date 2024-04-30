// https://leetcode-cn.com/problems/add-digits
/**
给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:
输入: 38
输出: 2
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。

进阶:
TODO: 你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？
*/
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let len, s, t;
  while (num >= 10) {
    // console.log('num', num);
    len = ('' + num).length;
    (s = 0), (t = 0);
    for (let i = 1; i <= len; i++) {
      t = parseInt(num / Math.pow(10, i)) % 10;
      // console.log('t', t);
      s += t;
    }
    s += num % 10;
    num = s;
  }
  return num;
};

// console.log(addDigits(38));
console.log(addDigits(10));
