// https://leetcode-cn.com/problems/spiral-matrix/
// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
/**
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

示例 1：

1 → 2 → 3
        ↓
4 → 5   6
↑       ↓
7 ← 8 ← 9

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]


示例 2：

1 → 2 → 3 → 4
            ↓
5 → 6 → 7   8
↑           ↓
9 ← 10← 11← 12


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 
提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

https://leetcode-cn.com/problems/spiral-matrix
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  if (matrix.length === 1) {
    return matrix[0];
  }
  const arr = [];
  const M = matrix.length;
  const N = matrix[0].length;
  const MAX_I = M - 1;
  const MAX_J = N - 1;
  const VISITED = {};
  const DIRECT = { left: 1, right: 2, up: 3, down: 4 };

  // i 控制上下，纵坐标; j 控制左右，横坐标; direct 方向标
  function move(i, j, direct) {
    if (direct === null || i == -1 || j == -1) {
      return;
    }
    // console.log(i, j);
    VISITED[`${i},${j}`] = 1;
    arr.push(matrix[i][j]);
    let nextMove = tryMoveNext(i, j, direct);
    if (nextMove.direct === null || i == -1 || j == -1) {
      return;
    } else {
      move(nextMove.i, nextMove.j, nextMove.direct);
    }
  }
  // 验证性尝试在从坐标(i,j) 向direct方向移动，当到达边界的时候顺时针旋转90%方向；当无路可走时，返回i=j=-1
  function tryMoveNext(i, j, direct) {
    if (
      direct === null ||
      i == -1 ||
      j == -1 ||
      ((VISITED[`${i},${j + 1}`] || j + 1 > MAX_J) && // can't move right →
        (VISITED[`${i + 1},${j}`] || i + 1 > MAX_I) && // can't move down ↓
        (VISITED[`${i},${j - 1}`] || j - 1 < 0) && // can't move left ←
        (VISITED[`${i - 1},${j}`] || i - 1 < 0)) // can't move up ↑
    ) {
      // can't move
      return { i: -1, j: -1, direct: null };
    } else {
      switch (direct) {
        // →
        case DIRECT.right: {
          let newJ = j + 1;
          if (VISITED[`${i},${newJ}`] || newJ > MAX_J) {
            direct = DIRECT.down;
            return tryMoveNext(i, j, direct);
          } else {
            // i = i;
            j = newJ;
          }
          break;
        }
        // ↓
        case DIRECT.down: {
          let newI = i + 1;
          if (VISITED[`${newI},${j}`] || newI > MAX_I) {
            direct = DIRECT.left;
            return tryMoveNext(i, j, direct);
          } else {
            i = newI;
            // j = j;
          }
          break;
        }
        // ←
        case DIRECT.left: {
          let newJ = j - 1;
          if (VISITED[`${i},${newJ}`] || newJ < 0) {
            direct = DIRECT.up;
            return tryMoveNext(i, j, direct);
          } else {
            j = newJ;
            // i = i;
          }
          break;
        }
        // ↑
        case DIRECT.up: {
          let newI = i - 1;
          if (VISITED[`${newI},${j}`] || newI < 0) {
            direct = DIRECT.right;
            return tryMoveNext(i, j, direct);
          } else {
            // j = j;
            i = newI;
          }
          break;
        }
        default: {
          i = j = -1;
          direct = null;
        }
      }
    }
    return {
      i,
      j,
      direct,
    };
  }

  //
  move(0, 0, DIRECT.right);
  return arr;
};

console.log(spiralOrder([[1]])); // [1]
console.log(spiralOrder([[1], [2], [3]])); // [1,2,3]
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); // [1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
); // [1,2,3,4,8,12,11,10,9,5,6,7]
