/**
 * 二叉树的后续遍历【简单】
 * // https://www.nowcoder.com/practice/1291064f4d5d4bdeaefbf0dd47d78541?tpId=295&tqId=2291301&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */
/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @return int整型一维数组
 */
function postorderTraversal(root) {
  const res = [];
  travel(root, res);
  return res;
}

function travel(node, records) {
  if (!node) {
    return;
  }
  const { left, right, val } = node;
  left && travel(left, records);
  right && travel(right, records);
  records.push(val);
}

module.exports = {
  postorderTraversal: postorderTraversal,
};
