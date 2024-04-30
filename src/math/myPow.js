// https://leetcode-cn.com/problems/powx-n
// https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof
/**
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。

示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
 

提示：

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) {
    return 1;
  }
  if (x == 0) {
    return 0;
  }

  // 方法一：手动算
  let res = unsignedPower(x, n);
  if (n < 0) {
    res = 1.0 / res;
  }
  return res;

  // 方法二：作弊，哈哈哈哈
  // return x**n;
  // return Math.pow(x, n);
};
function unsignedPower(x, absN) {
  absN = Math.abs(absN);
  if (absN == 0) {
    return 1;
  }
  if (absN == 1) {
    return x;
  }
  // 方式一，老老实实的挨个乘起来
  /*
    let res = 1.0;
    for (let i = 1; i <= absN; i++) {
        res *= x;
    }
    return res;
    */
  // 方式二：数学规律 a^n
  // a^n = a^(n/2) * a^(n/2)               n 为偶数时
  // a^n = a^((n-1)/2) * a^((n-1)/2) * a   n 为奇数时
  let res = 1;
  let isOdd = absN & (1 == 1); // 是否为奇数
  if (isOdd) {
    res = unsignedPower(x, (absN - 1) >> 1); // 除2采用右移，比乘除法性能高
    res *= res;
    res *= x;
  } else {
    res = unsignedPower(x, absN >> 1);
    res *= res;
  }
  return res;
}
