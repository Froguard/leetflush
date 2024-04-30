// https://leetcode-cn.com/problems/pascals-triangle
/**
杨辉三角
在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let rows = [];
  for (let i = 0; i < numRows; i++) {
    let cols = [];
    for (let j = 0; j <= i; j++) {
      let c;
      if (j === 0 || j === i) {
        c = 1;
      } else {
        let preRow = rows[i - 1];
        c = preRow[j - 1] + preRow[j];
      }
      cols[j] = c;
    }
    rows[i] = cols;
  }
  return rows;
};

console.log(generate(5));
