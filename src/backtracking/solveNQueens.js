// https://leetcode-cn.com/problems/eight-queens-lcci
// https://leetcode-cn.com/problems/n-queens/
/**
N 皇后

设计一种算法，打印 N 皇后在 N × N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的“对角线”指的是所有的对角线，不只是平分整个棋盘的那两条对角线。

注意：本题相对原题做了扩展

示例:

 输入：4
 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 解释: 4 皇后问题存在如下两个不同的解法。
[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]

通过次数11,659提交次数15,456
*/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if (n === 0) {
    // 没有逻辑而言，仅仅是因为测试用例有这个，请忽略吧！
    return [[]];
  }
  if (n === 1) {
    return [['Q']];
  }
  if (n == 2 || n === 3) {
    return [];
  }

  const Q = 'Q';
  const DOT = '.';
  let res = [];
  /**
   * 二维数组模拟棋盘
   * 千万不能  board = new Array(n).fill(new Array(n).fill(DOT));
   * 会导致 board 里边的元素的每一个引用都是一样的！！！
   * 即： board = [ arr1,arr2,arr3... ] arr1道arrn对应的会是用一个引用对象！随便对其中一个操作，将会导致所有元素内容都被修改
   */
  // let board = new Array(n).fill(new Array(n).fill(DOT)); //
  let board = [];
  function cleanRow(r) {
    if (r < n) {
      if (board[r] === undefined) {
        board[r] = new Array(n).fill(DOT);
      } else {
        for (let i = 0; i < n; i++) {
          board[r][i] = DOT;
        }
      }
    }
  }

  const LAST_ROW = n - 1;
  function putQueenToRow(r) {
    /**
     * 从本行的首位到末位，依次尝试放置：
     * - 本行如果能成功放置，尝试放置下一行
     *     - 如果能放置，且当前行已经是最后一行了，则说明是一个成功的解
     * - 本行如果不能成功放置，则不尝试放置下一行
     **/
    for (let c = 0; c < n; c++) {
      // 每一次循环都需要先重置本行，避免上轮计算，所产生的Q位，去影响本次放置Q的判断逻辑
      cleanRow(r);
      // 检查是否可以放置目标位置(x,c)
      if (allowPut(r, c)) {
        board[r][c] = Q;
        if (r == LAST_ROW) {
          res.push(board.map(b => b.join(''))); // 能够成功的放置到最后一行，说明前面已经放置好了，即此次放置，试一次成功的解
        } else {
          putQueenToRow(r + 1); // 尝试下一行
        }
      }
    }
  }

  /**
   * 通过检查坐标(r,c)之前已经排过的位置是否有不满足的情况出现，然后判定该坐标是否能够放置Queen
   * @param {*} r row 行号
   * @param {*} c column 列号
   */
  function allowPut(r = 0, c = 0) {
    if (r != 0) {
      // 不检查第一行，因为第一行总是能够放的
      for (let i = 0; i < r; i++) {
        // 检查前面的行即可
        let row = board[i];
        if (row[c] == Q) {
          // 检查同一列
          // console.log(`同一列上(${i},${c})已经有Queen！`);
          return false;
        }
        let lu = c - (r - i);
        if (lu >= 0 && lu < n && row[lu] == Q) {
          // 左边斜边
          // console.log(`左斜线上(${i},${lu})已经有Queen！`);
          return false;
        }
        let ru = c + (r - i);
        if (ru >= 0 && ru < n && row[ru] == Q) {
          // 左边斜边
          // console.log(`右斜线上(${i},${ru}})已经有Queen！`);
          return false;
        }
      }
    }
    // console.log(`checkAllow(${r},${c}) -> ${can?'√':'×不'}可放`);
    return true;
  }

  putQueenToRow(0); // 从第 0 行开始尝试放置
  return res;
};
