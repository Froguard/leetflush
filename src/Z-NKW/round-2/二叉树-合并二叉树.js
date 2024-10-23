/**
 * 合并二叉树
 * // https://www.nowcoder.com/practice/7298353c24cc42e3bd5f0e0bd3d1d759?tpId=295&tqId=1025038&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/merge-two-binary-trees
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
 * @param t1 TreeNode类
 * @param t2 TreeNode类
 * @return TreeNode类
 */
function mergeTrees(t1, t2) {
  if (!t1 && !t2) {
    return null;
  } else if (!t1 && t2) {
    return t2;
  } else if (t1 && !t2) {
    return t1;
  } else {
    const { left: l1, val: v1, right: r1 } = t1;
    const { left: l2, val: v2, right: r2 } = t2;
    let newNode = new TreeNode(v1 + v2);
    newNode.left = mergeTrees(l1, l2);
    newNode.right = mergeTrees(r1, r2);
    return newNode;
  }
}
module.exports = {
  mergeTrees: mergeTrees,
};
