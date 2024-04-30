// https://leetcode-cn.com/problems/perfect-number
/**
对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

给定一个 整数 n， 如果是完美数，返回 true，否则返回 false

示例 1：
输入：28
输出：True
解释：28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, 和 14 是 28 的所有正因子。

示例 2：
输入：num = 6
输出：true

示例 3：
输入：num = 496
输出：true

示例 4：
输入：num = 8128
输出：true

示例 5：
输入：num = 2
输出：false
 
提示：
1 <= num <= 10^8
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  /**
   * 方法一：暴力计算，会比较费时间
   * 分析：
   * - 质数一定不是完美数，因为质数只有1和它本身这两个约数
   * - 数字 1 也不是完美数，因为1只有一个约数1，出去自己1之外，就没有约数了
   * - 隐藏规律：完美数一定是偶数，但偶数并不一定是完美数
   */
  if (num <= 2) {
    return false;
  }
  if (num % 2 !== 0) {
    return false;
  }
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      if (i * i === num) {
        sum += i;
      } else {
        sum += i + num / i; // 同时加上另一个约数
      }
    }
  }
  return sum === num;
};
