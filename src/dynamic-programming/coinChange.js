// https://leetcode-cn.com/problems/coin-change
/**
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。
 

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
示例 4：

输入：coins = [1], amount = 1
输出：1
示例 5：

输入：coins = [1], amount = 2
输出：2
 
提示：
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (coins.length == 0) {
    return -1;
  }
  if (amount == 0) {
    return 0;
  }
  if (coins.length == 1) {
    let c0 = coins[0];
    if (amount < c0 || amount % c0 != 0) {
      return -1;
    }
    return amount / c0;
  }
  coins.sort((a, b) => b - a);
  // 方法一，利用组合的方式，将使用硬币能够凑出零钱的组合情况，都列出来，然后求取组合长度最小的情况
  // 求取组合的办法详见 ：https://leetcode-cn.com/problems/combination-sum

  // 方法二，动态规划
  // dp[x] 表示 金额为 x 的时候所需要的最小硬币数量
  // dp[x] = min( dp[x], dp[x-coins[i]] )
  // dp[0] 表示金额为0时候的情况，此时不需要找零，dp[0]=0
  let dp = new Array(amount + 1).fill(Infinity); // 为方便做 min 比较，直接初始化值为Infinity
  dp[0] = 0;
  for (let c of coins) {
    for (let i = c; i <= amount; i++) {
      if (dp[i - c] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
  }
  let res = dp[amount];
  res = res === Infinity ? -1 : res;
  return res;
};
