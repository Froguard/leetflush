// https://leetcode-cn.com/problems/perfect-squares
/**
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

 

示例 1：

输入：n = 12
输出：3
解释：12 = 4 + 4 + 4
示例 2：

输入：n = 13
输出：2
解释：13 = 4 + 9
 
提示：
1 <= n <= 104
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 硬币找零的变种，只是硬币种类集合变成了「完全平方数组成的集合」
  let dp = new Array(n + 1).fill(Infinity); // 使用 Infinity 是为了方便做最小值比较
  dp[0] = 0;
  // 求取硬币 coins 集合，顺序为逆序
  let coins = [1];
  for (let i = 2; i * i <= n; i++) {
    coins.unshift(i * i); // 保证coins的逆序
  }
  // console.log(coins);
  // 遍历
  for (let c of coins) {
    for (let i = c; i <= n; i++) {
      if (dp[i - c] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
  }
  return dp[n];
};
