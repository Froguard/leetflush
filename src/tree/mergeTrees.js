// https://leetcode-cn.com/problems/merge-two-binary-trees
/**
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

示例 1:

输入:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
输出:
合并后的树:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
注意: 合并必须从两个树的根节点开始。
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null;
  } else if (!root1 && root2) {
    return root2;
  } else if (root1 && !root2) {
    return root1;
  } else {
    let l1 = root1.left,
      r1 = root1.right,
      v1 = root1.val;
    let l2 = root2.left,
      r2 = root2.right,
      v2 = root2.val;
    let newNode = new TreeNode(v1 + v2);
    newNode.left = mergeTrees(l1, l2);
    newNode.right = mergeTrees(r1, r2);
    return newNode;
  }
};
