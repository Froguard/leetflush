// https://leetcode-cn.com/problems/binary-tree-paths
/**
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]
解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let pathArr = [];
  function travel(node, pathItems = []) {
    if (node !== null) {
      let { left, val, right } = node;
      pathItems.push(val);
      if (left === null && right === null) {
        pathArr.push(pathItems.join('->'));
      } else {
        left !== null && travel(left, [].concat(pathItems));
        right !== null && travel(right, [].concat(pathItems));
      }
    }
  }
  travel(root);
  return pathArr;
};

let rt = createBinaryTreeNodeByArr([1, 2, 3, null, 5]);
console.log(rt);
console.log(binaryTreePaths(rt)); //  ["1->2->5", "1->3"]
