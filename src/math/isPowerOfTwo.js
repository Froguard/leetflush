// https://leetcode-cn.com/problems/power-of-two
/**
给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

示例 1:
输入: 1
输出: true
解释: 2^0 = 1

示例 2:
输入: 16
输出: true
解释: 2^4 = 16

示例 3:
输入: 218
输出: false
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 方法一：【位与】，n=2^x 这个数，进行 (n & -n) 操作后会变成自己 n;
  // return (n > 0) && (n & -n) == n;

  // 方法二：【位移】<< 左移一位表示*2  2^30 % n = 0 则说明 n 的约数(因子)只有 2，即 n 可以表示为 n=2^x 形式
  // return (n > 0) && (1<<30) % n == 0;

  // 方法三：循环
  if (n === 1) {
    return true;
  } else if (n <= 0 || n % 2 !== 0) {
    return false;
  } else {
    while (n % 2 == 0) {
      n /= 2;
    }
    return n === 1;
  }
};
