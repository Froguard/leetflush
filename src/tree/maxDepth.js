// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
/**
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { TreeNode, createBinaryTreeNodeByArr } = require('./com/TreeNode');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;
  function travel(node, depth) {
    if (!node) {
      return 0;
    }
    let { left, right } = node;
    if (!left && !right) {
      depth += 1;
      max = Math.max(depth, max);
    } else {
      left && travel(left, depth + 1);
      right && travel(right, depth + 1);
    }
  }
  travel(root, 0);
  return max;
};

let root = createBinaryTreeNodeByArr([3, 9, 20, null, null, 15, 17]);
console.log(maxDepth(root));
