// https://leetcode-cn.com/problems/three-steps-problem-lcci/
/**
三步问题

有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。
结果可能很大，你需要对结果模 1000000007。

示例1:
 输入：n = 3
 输出：4
 说明: 有四种走法

示例2:
 输入：n = 5
 输出：13

提示:
n范围在[1, 1000000]之间
 */
var cached = new Map();
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  /**
   * 分析，和爬楼梯问题相似，也是动态规划之一的解法
   *
   * 1. 定状态：f(i) 表示到第i级台阶的走法
   * 2. 找规律：第i级可以细分为有三种方法：从i-1跨1步到i；从i-2跨2步到i；从i-3跨3步到i
   *           f(i) = f(i-1) + f(i-2) + f(i-3)
   * 3. 找初值：
   *     - 当 i = 1 时，f(1) = 1
   *     - 当 i = 2 时，f(2) = f(1) + 1 = 1 + 1 = 2
   *     - 当 i = 3 时，f(3) = f(1) + f(2) + 1 = 1 + 2 + 1 = 4
   */
  // 方法一，循环
  let f = [0, 1, 2, 4];
  for (let i = 4; i <= n; i++) {
    f[i] = (f[i - 1] + f[i - 2] + f[i - 3]) % 1000000007;
  }
  return f[n];

  // 方法二，深度递归法，由于复杂度是 O(3^n)，当输入的数字过大时，会超时，即便是Node也会超时
  /*
    if (cached.get(n) !== undefined) {
        return cached.get(n);
    }
    if (n < 3) {
        return n;
    }
    if (n === 3) {
        return 4;
    }
    return (waysToStep(n-1) + waysToStep(n-2) + waysToStep(n-3)) % 1000000007;
    */
};

console.log(waysToStep(1)); // 1
console.log(waysToStep(2)); // 2
console.log(waysToStep(3)); // 4
console.log(waysToStep(4)); // 7
console.log(waysToStep(5)); // 13
console.log(waysToStep(1000000)); // 746580045
