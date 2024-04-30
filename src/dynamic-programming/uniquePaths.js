// https://leetcode-cn.com/problems/unique-paths
/*
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

示例 1：

输入：m = 3, n = 7
输出：28
示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6
 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 方法一：递归，会超时
// var uniquePaths = function(m, n) {
//     if (m==1 || n == 1) {
//         return 1;
//     }
//     return uniquePaths(m-1, n) + uniquePaths(m, n-1);
// };
// 方法二：循环，不超时
var uniquePaths = function (m, n) {
  let dp = [];
  for (let i = 1; i <= m; i++) {
    dp[i] = dp[i] || [];
    for (let j = 1; j <= n; j++) {
      if (i == 1 || j == 1) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
};
