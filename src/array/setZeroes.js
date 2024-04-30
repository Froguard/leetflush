// https://leetcode-cn.com/problems/set-matrix-zeroes
/**
矩阵置零
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

进阶：

一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个仅使用常量空间的解决方案吗？
 

示例 1：


输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
示例 2：


输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

提示：

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const M = matrix.length;
  const N = matrix[0].length;
  let visited = []; // 表示已经被访问
  for (let i = 0; i < M; i++) {
    visited[i] = new Array(N).fill(0);
  }

  function settle(i, j) {
    if (0 <= i && i < M && 0 <= j && j < N && !visited[i][j]) {
      visited[i][j] = 1;
      let r = 0;
      while (r < M) {
        // 防止重复设置，以及防止设置本身已经是0的元素
        if (r != i && matrix[r][j] != 0) {
          matrix[r][j] = 0;
          visited[r][j] = 1;
        }
        r++;
      }
      let c = 0;
      while (c < N) {
        // 防止重复设置，以及防止设置本身已经是0的元素
        if (c != j && matrix[i][c] != 0) {
          matrix[i][c] = 0;
          visited[i][c] = 1;
        }
        c++;
      }
    }
  }
  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (!visited[r][c] && matrix[r][c] == 0) {
        settle(r, c);
      }
    }
  }
  // console.log(visited);
};
