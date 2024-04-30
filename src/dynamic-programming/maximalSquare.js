// https://leetcode-cn.com/problems/maximal-square
/**
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。


示例 1：
输入：matrix =
[
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]
输出：4

示例 2：
输入：matrix =
[
    ["0","1"],
    ["1","0"]
]
输出：1

示例 3：
输入：matrix =
[
    ["0"]
]
输出：0
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] 为 '0' 或 '1'
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let M = matrix.length;
  if (M == 0) {
    return 0;
  }
  let N = matrix[0].length;
  if (N == 0) {
    return 0;
  }

  /**
   * dp[i][j] 表示以第i行第j列为右下角「边界」，所能构成的 「最大正方形边长」（注意是边长，不是面积）, 则递推式为:
   * - i和j范围应该是:
   *     - i : 0 ~ M+1
   *     - j : 0 ~ N+1
   * - 判断以某个点为正方形右下角时最大的正方形时，那它的上方，左方和左上方三个点也可能是某个正方形的右下角
   *     - dp[i-1][j-1] 左斜上角 ↖
   *     - dp[i-1][j] 左边 ←
   *     - do[i][j-1] 上边 ↑
   * - 该点为右下角的正方形的最大边长，最多比它的上方，左方和左上方为右下角的正方形的边长多1
   * - 由于是正方形，所以短的边决定了正方形的边
   *
   * dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]); // 当且仅当 matrix[i-1][j-1] == '1' 时成立
   */
  let dp = [];
  for (let i = 0; i < M + 1; i++) {
    dp[i] = new Array(N + 1).fill(0);
  }
  dp[0][0] = matrix[0][0] == '1' ? 1 : 0;

  let maxLen = 0;
  for (let i = 1; i <= M; i++) {
    for (let j = 1; j <= N; j++) {
      if (matrix[i - 1][j - 1] == '1') {
        dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        maxLen = Math.max(dp[i][j], maxLen);
      }
    }
  }
  return maxLen * maxLen;
};

function min(a, b, c) {
  return Math.min(Math.min(a, b), c);
}
