// https://leetcode-cn.com/problems/transpose-matrix
/**
给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
↓↓↓
[
    [1,5,9],
    [2,6,10],
    [3,7,11],
    [4,8,12]
]

示例 1：
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]

示例 2：
输入：matrix = [[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
 
提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
-109 <= matrix[i][j] <= 109
*/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let res = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
      row.push(matrix[j][i]);
    }
    res.push(row);
  }
  return res;
};
