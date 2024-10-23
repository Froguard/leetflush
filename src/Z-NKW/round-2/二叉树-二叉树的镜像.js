/**
 * 二叉树的镜像
 * // https://www.nowcoder.com/practice/a9d0ecbacef9410ca97463e4a5c83be7?tpId=295&tqId=1374963&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * //
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
 * @param pRoot TreeNode类
 * @return TreeNode类
 */
function Mirror(pRoot) {
  reverseLR(pRoot);
  return pRoot;
}

function reverseLR(node) {
  if (!node) {
    return;
  }
  const { left, right } = node;
  node.left = right;
  node.right = left;
  left && reverseLR(left);
  right && reverseLR(right);
}

module.exports = {
  Mirror: Mirror,
};
