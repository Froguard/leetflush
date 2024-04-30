// https://leetcode-cn.com/problems/nim-game
/**
Nim 游戏

你和你的朋友，两个人一起玩 Nim 游戏：

桌子上有一堆石头。
你们轮流进行自己的回合，你作为先手。
每一回合，轮到的人拿掉 1 - 3 块石头。
拿掉最后一块石头的人就是获胜者。
假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false 。

示例 1：
输入：n = 4
输出：false
解释：如果堆中有 4 块石头，那么你永远不会赢得比赛；
     因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。

示例 2：
输入：n = 1
输出：true

示例 3：
输入：n = 2
输出：true
 
提示：
1 <= n <= 231 - 1

*/
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  // 方法一，看 0-10 的输出规律，基本上都是 1 个 false 带 3 个true； 数学分析果然牛逼！！！
  return n % 4 != 0;

  // 方法二，动态规划，有缺陷，会溢出
  // let dp = [false, true, true, true];
  // for (let i = 4; i <= n; i++) {
  //     dp[i] = !(dp[i-1] && dp[i-2] && dp[i-3]);
  // }
  // return dp[n];

  // 方法三，老老实实改进算法二，让每个结果缓存起来,，但仍旧有缺陷，会超时
  // switch (n) {
  //     case 0: {
  //         return false;
  //     }
  //     case 1: {
  //         return true;
  //     }
  //     case 2: {
  //         return true;
  //     }
  //     case 3: {
  //         return true;
  //     }
  //     default: {
  //         let n_3 = true,
  //             n_2 = true,
  //             n_1 = true;
  //         let ni;
  //         for (let i = 4; i <= n; i++) {
  //             ni = !(n_1 && n_2 && n_3);
  //             n_3 = n_2;
  //             n_2 = n_1;
  //             n_1 = ni;
  //         }
  //         return ni;
  //     }
  // }
};
console.log(canWinNim(0)); // false
console.log(canWinNim(1)); // true
console.log(canWinNim(2)); // true
console.log(canWinNim(3)); // true
console.log(canWinNim(4)); // false
console.log(canWinNim(5)); // true
console.log(canWinNim(6)); // true
console.log(canWinNim(7)); // true
console.log(canWinNim(8)); // false
console.log(canWinNim(9)); // true
console.log(canWinNim(10)); // true
console.log(canWinNim(11)); // true
console.log(canWinNim(12)); // false

// 以下内存会溢出，所以需要用到另外的法子去解题
console.log(canWinNim(1348820612)); // false
console.log(canWinNim(655678107)); // true
