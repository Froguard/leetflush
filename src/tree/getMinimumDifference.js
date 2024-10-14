// https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst
// https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
/**
给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

示例：
输入：
   1
    \
     3
    /
   2
输出：
1
解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 
提示：
树中至少有 2 个节点。
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode, createBinaryTreeNodeByArr } = require('./com/TreeNode');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let res = [];
  function travel(node) {
    if (!node) {
      return;
    }
    let { val, left, right } = node;
    res.push(val);
    left && travel(left);
    right && travel(right);
  }
  travel(root);

  res.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 1; i < res.length; i++) {
    min = Math.min(min, Math.abs(res[i] - res[i - 1]));
  }

  return min;
};
