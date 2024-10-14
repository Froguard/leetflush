// https://leetcode-cn.com/problems/path-sum
/**
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

叶子节点 是指没有子节点的节点。

示例 1：
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true

示例 2：
输入：root = [1,2,3], targetSum = 5
输出：false

示例 3：
输入：root = [1,2], targetSum = 0
输出：false
 
提示：
树中节点的数目在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
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
 * @param {number} targetSum
 * @return {boolean}
 */
// 方法一，递归求取，当发现有的时候，就直接停止
var hasPathSum = function (root, targetSum) {
  let hasOne = false;
  function traversal(node, sum = 0) {
    if (!node || hasOne) {
      return;
    }
    let { left, right, val } = node;
    sum += val;
    if (!left && !right) {
      // 叶子节点
      if (sum == targetSum) {
        hasOne = true;
      }
    } else {
      left && traversal(left, sum);
      right && traversal(right, sum);
    }
  }
  traversal(root);
  return hasOne;
};
// 方法二，暴力求出所有路径和，然后看看是否包含 targetSum 的情况
var hasPathSum2 = function (root, targetSum) {
  let sumArr = [];
  function travel(node, sum = 0) {
    if (!node) {
      return;
    }
    let { left, right, val } = node;
    sum += val;
    if (!left && !right) {
      // 叶子节点
      if (sum == targetSum) {
        !sumArr.includes(sum) && sumArr.push(sum);
      }
    } else {
      if (sum < targetSum) {
        left && travel(left, sum);
        right && travel(right, sum);
      }
    }
  }
  travel(root, 0);
  return sumArr.includes(targetSum);
};

console.log(hasPathSum(createBinaryTreeNodeByArr([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)); // true
console.log(hasPathSum(createBinaryTreeNodeByArr([1, 2, 3]), 5)); // false
console.log(hasPathSum(createBinaryTreeNodeByArr([1, 2]), 0)); // false
