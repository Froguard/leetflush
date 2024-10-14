// https://leetcode-cn.com/problems/same-tree
/**
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1：
输入：p = [1,2,3], q = [1,2,3]
输出：true

示例 2：
输入：p = [1,2], q = [1,null,2]
输出：false

示例 3：
输入：p = [1,2,1], q = [1,1,2]
输出：false

提示：
两棵树上的节点数目都在范围 [0, 100] 内
-104 <= Node.val <= 104
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p && q) {
    let val1 = p.val,
      left1 = p.left,
      right1 = p.right;
    let val2 = q.val,
      left2 = q.left,
      right2 = q.right;
    if (val1 !== val2) {
      return false;
    }
    return isSameTree(left1, left2) && isSameTree(right1, right2);
  } else {
    return p == q;
  }
};

// test
console.log(isSameTree(createBinaryTreeNodeByArr([1, 2, 3]), createBinaryTreeNodeByArr([1, 2, 3]))); // true

console.log(isSameTree(createBinaryTreeNodeByArr([1, 2]), createBinaryTreeNodeByArr([1, null, 2]))); // false

console.log(isSameTree(createBinaryTreeNodeByArr([1, 2, 1]), createBinaryTreeNodeByArr([1, 1, 2]))); // false
