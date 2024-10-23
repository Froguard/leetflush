/**
 * 二叉树的中序遍历【简单】
 * // https://www.nowcoder.com/practice/0bf071c135e64ee2a027783b80bf781d?tpId=295&tqId=1512964&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
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
function inorderTraversal(root) {
  const res = [];
  travel(root, res);
  return res;
}

function travel(node, records) {
  if (!node) {
    return;
  }
  const { left, val, right } = node;
  left && travel(left, records);
  records.push(val);
  right && travel(right, records);
}

module.exports = {
  inorderTraversal: inorderTraversal,
};
