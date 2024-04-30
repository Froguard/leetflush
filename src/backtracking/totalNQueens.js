// https://leetcode-cn.com/problems/n-queens-ii
/**
N 皇后，计算出 “解” 的个数

⚠️【注意】本题和之前那个题有区别，是求个数，不是求解的集合！！！！

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

示例 1：
输入：n = 4
输出：2
解释：如上图所示，4 皇后问题存在两个不同的解法。

示例 2：
输入：n = 1
输出：1
 
提示：
1 <= n <= 9
皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
*/
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const Q = 1;
  const DOT = 0;
  if (n === 1) {
    return 1;
  }
  if (n == 2 || n === 3) {
    return 0;
  }

  let res = 0;
  /**
   * 二维数组模拟棋盘
   * 千万不能  board = new Array(n).fill(new Array(n).fill(DOT));
   * 会导致 board 里边的元素的每一个引用都是一样的！！！
   * 即： board = [ arr1,arr2,arr3... ] arr1道arrn对应的会是用一个引用对象！随便对其中一个操作，将会导致所有元素内容都被修改
   */
  // let board = new Array(n).fill(new Array(n).fill(DOT)); //
  let board = [];
  initBoard();
  function initBoard() {
    for (let i = 0; i < n; i++) {
      cleanRow(i);
    }
  }
  function cleanRow(rowIndex) {
    if (rowIndex < n) {
      if (board[rowIndex] === undefined) {
        board[rowIndex] = new Array(n).fill(DOT);
      } else {
        for (let i = 0; i < n; i++) {
          board[rowIndex][i] = DOT;
        }
      }
    }
  }
  const LAST = n - 1;
  function putQueenToRow(x) {
    /**
     * 从本行的首位到末位，依次尝试放置：
     * - 本行如果能成功放置，尝试放置下一行
     *     - 如果能放置，且当前行已经是最后一行了，则说明是一个成功的解
     * - 本行如果不能成功放置，则不尝试放置下一行
     **/
    for (let c = 0; c < n; c++) {
      cleanRow(x); // 每一次循环都需要先重置本行，避免上轮计算，所产生的Q位，去影响本次放置Q的判断逻辑
      if (allowPut(x, c)) {
        board[x][c] = Q;
        if (x == LAST) {
          res++; // 能够成功的放置到最后一行，说明前面已经放置好了，即此次放置，试一次成功的解
        } else {
          putQueenToRow(x + 1); // 尝试下一行
        }
      }
    }
  }
  // 通过检查坐标(r,c)之前已经排过的位置是否有不满足的情况出现，然后判定该坐标是否能够放置Queen
  function allowPut(r = 0, c = 0) {
    let can = true;
    if (r != 0) {
      // 不检查第一行，因为第一行总是能够放的
      for (let i = 0; i < r; i++) {
        // 检查前面的行即可
        let row = board[i];
        if (row[c] == Q) {
          // 检查同一列
          can = false; // console.log(`同一列上(${i},${c})已经有Queen！`);
          break;
        }
        let lu = c - (r - i);
        if (lu >= 0 && lu < n && row[lu] == Q) {
          // 左边斜边
          can = false; // console.log(`左斜线上(${i},${lu})已经有Queen！`);
          break;
        }
        let ru = c + (r - i);
        if (ru >= 0 && ru < n && row[ru] == Q) {
          // 左边斜边
          can = false; // console.log(`右斜线上(${i},${ru}})已经有Queen！`);
          break;
        }
      }
    }
    // console.log(`checkAllow(${r},${c}) -> ${can?'√':'×不'}可放`);
    return can;
  }
  putQueenToRow(0); // 从第 0 行开始尝试放置
  return res;
};
