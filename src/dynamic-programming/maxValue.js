// https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof
/**
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

示例 1:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
 
提示：
0 < grid.length <= 200
0 < grid[0].length <= 200
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  /**
   * 中心思想，动态规划
   * - dp[i][j] 表示走到位置(i,j)时候能够获得的最大收益
   * - i = 0 时，收益为第一列数字中，前 i 行之和
   * - j = 0 时，收益为第一行数字中，前 j 列之和
   * - i && j 同时为0，则价值是原点 (0,0) 即 grid[0][0]
   * - 其他：dp[i][j] = Math.max((dp[i-1][j]+v), (dp[i][j-1]+v)); 其中 v = grid[i][j] 表示位置 (i,j) 的价值
   */
  const M = grid.length;
  const N = grid[0].length;
  let dp = [];
  let max = 0;
  for (let i = 0; i < M; i++) {
    dp[i] = dp[i] || [];
    for (let j = 0; j < N; j++) {
      if (i == 0 && j == 0) {
        dp[i][i] = grid[0][0];
      } else {
        let v = grid[i][j];
        if (i == 0 && j > 0) {
          dp[i][j] = dp[i][j - 1] + v;
        } else if (j == 0 && i > 0) {
          dp[i][j] = dp[i - 1][j] + v;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j] + v, dp[i][j - 1] + v);
        }
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
