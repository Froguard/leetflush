// https://leetcode-cn.com/problems/pacific-atlantic-water-flow
/**
太平洋大西洋水流问题

给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。

规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。

请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。

提示：

输出坐标的顺序不重要
m 和 n 都小于150

示例：

给定下面的 5x5 矩阵:

  太平洋 ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * 大西洋

返回:
[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (上图中带括号的单元).
 */
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const M = heights.length;
  const N = heights[0].length;
  const LAST_ROW = M - 1;
  const LAST_COL = N - 1;
  let canInfoList = []; // 二维数组，用以存储对一个元素在四个方向上的可达性{up,down,left,right}
  // 设置 左上角 & 右下角
  setCan(0, 0, 'up');
  setCan(0, 0, 'left');
  setCan(LAST_ROW, LAST_COL, 'right');
  setCan(LAST_ROW, LAST_COL, 'down');

  dfs(0, 0, 'up');
  dfs(0, 0, 'left');
  dfs(LAST_ROW, LAST_COL, 'right');
  dfs(LAST_ROW, LAST_COL, 'down');

  // console.log(
  //     canInfoList.map(
  //         list => list.map(obj=>`U=${obj.up||0}-D${obj.down||0}-L${obj.left||0}-R${obj.right||0}`).join('   ,   ')
  //     ).join('\n')
  // );
  function initCan(row, col) {
    if (row < 0 || row > LAST_ROW || col < 0 || col > LAST_COL) {
      return;
    }
    if (!canInfoList[row]) {
      canInfoList[row] = [];
    }
    if (!canInfoList[row][col]) {
      canInfoList[row][col] = {};
    }
  }
  function setCan(row, col, k) {
    initCan(row, col);
    canInfoList[row][col][k] = 1;
    canInfoList[row][col][`${k}-checked`] = 1;
  }
  // [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]

  function checkNext(curH, k, nextRow, nextCol) {
    if (nextRow < 0 || nextRow > LAST_ROW || nextCol < 0 || nextCol > LAST_COL) {
      return;
    }
    initCan(nextRow, nextCol);
    let nextCan = canInfoList[nextRow][nextCol];
    let nextH = heights[nextRow][nextCol];
    // 边界需要默认处理
    let isBoundary =
      (k == 'up' && nextRow == 0) ||
      (k == 'down' && nextRow == LAST_ROW) ||
      (k == 'left' && nextCol == 0) ||
      (k == 'right' && nextCol == LAST_COL);
    if ((isBoundary || curH <= nextH) && !nextCan[`${k}-checked`]) {
      // 只检查没有检查过的
      // console.log(`(${nextRow},${nextCol}) 检查完毕，符合条件${k}，继续递归检查周边`);
      setCan(nextRow, nextCol, k);
      dfs(nextRow, nextCol, k);
    }
    // else {
    //     if (curH > nextH) {
    //         console.log(`(${nextRow},${nextCol}) ${nextH} 检查完毕，不符合条件${k}`);
    //     }
    //     if (nextCan[`${k}-checked`]) {
    //         console.log(`(${nextRow},${nextCol}) 重复检查跳过 ${k} ${nextCan[`${k}-checked`]}`);
    //     }
    // }
  }
  function dfs(row, col, k) {
    if (row < 0 || row > LAST_ROW || col < 0 || col > LAST_COL) {
      return;
    }
    let curH = heights[row][col];
    // console.log(`检查（${row},${col}）${k}, ${curH}`);

    checkNext(curH, k, row - 1, col); // 往上检查

    checkNext(curH, k, row + 1, col); // 往下检查

    checkNext(curH, k, row, col - 1); // 向左检查

    checkNext(curH, k, row, col + 1); // 往右检查
  }

  let coordinates = [];
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      let { up, down, left, right } = canInfoList[i][j] || {};
      if ((up || left) && (down || right)) {
        coordinates.push([i, j]);
      }
    }
  }
  return coordinates;
};
