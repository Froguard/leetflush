// https://leetcode-cn.com/problems/search-a-2d-matrix-ii
/*
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

示例:
现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const N = matrix.length;
  if (N == 0) {
    return false;
  } else {
    const M = matrix[0].length;
    if (M == 0) {
      return false;
    }
    let row = 0;
    while (row < N) {
      let tmp = matrix[row][0];
      if (tmp < target) {
        row++;
      } else if (tmp > target) {
        if (row == 0) {
          return false;
        } else {
          row--;
          break;
        }
      } else {
        return true;
      }
    }
    row = row >= N ? N - 1 : row < 0 ? 0 : row;
    function searchRow(r) {
      if (r < 0 || r >= N) {
        return false;
      }
      let rs = matrix[r];
      return binarySearch(rs, target, 0, rs.length - 1) || (r == 0 ? false : searchRow(r - 1));
    }

    return searchRow(row);
  }
};
// 二分查找加快效率
function binarySearch(arr, tar, left, right) {
  if (left > right) {
    return false;
  }
  if (left == right) {
    return arr[left] == tar;
  }

  let mid = Math.floor((left + right) / 2);
  if (arr[mid] == tar) {
    return true;
  } else if (arr[mid] > tar) {
    return binarySearch(arr, tar, left, mid - 1);
  } else {
    return binarySearch(arr, tar, mid + 1, right);
  }
}
