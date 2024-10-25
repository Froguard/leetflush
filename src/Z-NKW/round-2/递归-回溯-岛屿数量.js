/**
 * 岛屿数量
 * // https://www.nowcoder.com/practice/0c9664d1554e466aa107d899418e814e?tpId=295&tqId=1024684&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 判断岛屿数量
 * @param grid char字符型二维数组
 * @return int整型
 */
function solve(grid) {
  const ROWS = grid.length;
  if (!ROWS) {
    return 0;
  }
  let count = 0;
  const COLS = grid[0].length;
  // 核心思想，深度遍历，当遇到 1 的时候，把与之相连的元素，如果是 1，都置为 0
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const cur = grid[i][j];
      if (cur === '1') {
        count++;
        dfsClearAround(grid, i, j);
      } /* if (cur === "0") {
							continue;
					} else*/ else {
        continue;
      }
    }
  }
  // console.log('新盘：', grid); // 理论上只留下每个岛的第一个 1
  // console.log('结果：', count);
  return count;
}

/**
 * 深度优先，进行周边相连元素（即属于同一个岛屿上）的 1 的清理，置为 0
 */
function dfsClearAround(grid, r, c) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  grid[r][c] = '0';
  isPosOk(r - 1, c, ROWS, COLS) && grid[r - 1][c] === '1' && dfsClearAround(grid, r - 1, c);
  isPosOk(r + 1, c, ROWS, COLS) && grid[r + 1][c] === '1' && dfsClearAround(grid, r + 1, c);
  isPosOk(r, c - 1, ROWS, COLS) && grid[r][c - 1] === '1' && dfsClearAround(grid, r, c - 1);
  isPosOk(r, c + 1, ROWS, COLS) && grid[r][c + 1] === '1' && dfsClearAround(grid, r, c + 1);
}

function isPosOk(r, c, ROWS, COLS) {
  return 0 <= r && r < ROWS && 0 <= c && c < COLS;
}

module.exports = {
  solve: solve,
};
