/**
 * 顺时针旋转矩阵
 * // https://www.nowcoder.com/practice/2e95333fbdd4451395066957e24909cc?tpId=295&tqId=25283&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param mat int整型二维数组
 * @param n int整型
 * @return int整型二维数组
 */
function rotateMatrix(mat, n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res[i] = [];
    for (let j = n - 1; j >= 0; j--) {
      res[i].push(mat[j][i]);
    }
  }
  return res;
}
module.exports = {
  rotateMatrix: rotateMatrix,
};
