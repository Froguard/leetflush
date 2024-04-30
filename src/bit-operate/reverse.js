// https://leetcode-cn.com/problems/reverse-integer/
/**
给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

示例 1：
输入：x = 123
输出：321

示例 2：
输入：x = -123
输出：-321

示例 3：
输入：x = 120
输出：21

示例 4：
输入：x = 0
输出：0
 */

const MIN = Math.pow(-2, 31);
const MAX = Math.pow(2, 31) - 1;

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let nums = JSON.stringify(x).split('');
  let res = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let n = nums[i];
    if (i === 0 && n === '-') {
      res.unshift(n);
    } else {
      res.push(n);
    }
  }
  res = parseInt(res.join('').replace(/0+$/g, ''));
  return MIN <= res && res <= MAX ? res : 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
