// https://leetcode-cn.com/problems/pascals-triangle-ii/
/**
杨辉三角II
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

示例:

输入: 3
输出: [1,3,3,1]

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const numRows = rowIndex + 1;
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
  return rows[rowIndex];
};

console.log(getRow(5));
