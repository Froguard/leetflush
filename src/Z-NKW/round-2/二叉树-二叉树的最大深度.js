/**
 * 二叉树的最大深度
 * // https://www.nowcoder.com/practice/8a2b2bf6c19b4f23a9bdb9b233eefa73?tpId=295&tqId=642&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
 * // https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
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
 * @return int整型
 */
function maxDepth(root) {
  function travel(node, curDepth = 0) {
    if (!node) {
      return curDepth;
    }
    const { left, right } = node;
    curDepth += 1;
    return Math.max(travel(left, curDepth), travel(right, curDepth));
  }
  return travel(root, 0);
}

module.exports = {
  maxDepth: maxDepth,
};
