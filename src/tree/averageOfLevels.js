// https://leetcode-cn.com/problems/average-of-levels-in-binary-tree
/**
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

示例 1：
输入：
    3
   / \
  9  20
    /  \
   15   7
输出：[3, 14.5, 11]
解释：
第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 
提示：
节点值的范围在32位有符号整数范围内。
*/
const { TreeNode, createBinaryTreeNodeByArr } = require('./com/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let dsArr = [];
  function travel(node, depth) {
    if (!node) {
      return;
    }
    let { left, right, val } = node;
    if (dsArr[depth] === undefined) {
      dsArr[depth] = [];
    }
    dsArr[depth].push(val);
    left && travel(left, depth + 1);
    right && travel(right, depth + 1);
  }
  travel(root, 0);
  dsArr = dsArr.map(ds => ds.reduce((acc, v) => acc + v, 0) / ds.length);
  return dsArr;
};
