// https://leetcode-cn.com/problems/sum-of-left-leaves
/**
左叶子之和

计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('./com/TreeNode');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  function getLeftChild(node) {
    if (node === null) {
      return 0;
    }
    let { left, right } = node;
    let l = 0,
      r = 0;
    if (left) {
      l = getLeftChild(left);
      if (left.left === null && left.right === null) {
        // 只有左右子节点均为null，才说明是一个「叶子」
        l += left.val;
      }
    }
    if (right) {
      r = getLeftChild(right);
    }
    return l + r;
  }
  return getLeftChild(root);
};
