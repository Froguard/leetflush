// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
/**
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：2

示例 2：
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 
提示：
树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000
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
var minDepth = function (root) {
  let min = Infinity;
  function travel(node, depth) {
    if (!node) {
      min = 0;
      return;
    }
    let { left, right } = node;
    if (!left && !right) {
      // 当且仅当左右子节点均为null时，才说明其是一个叶子节点
      depth += 1;
      min = Math.min(depth, min);
    } else {
      left && travel(left, depth + 1);
      right && travel(right, depth + 1);
    }
  }
  travel(root, 0);
  return min;
};

// let root = createBinaryTreeNodeByArr([3,9,20,null,null,15,7]);
// console.log(minDepth(root)); // 2

// 特别注意，我自己写的创建测试用例的 createBinaryTreeNodeByArr 函数，和LeetCode上的数组并不完全相同！！！
/**
 * 比如：
 * LeetCode 上 [2,null,3,null,4,null,5]，表示如下
 *
 * 2
 *  \
 *   3
 *    \
 *     4
 *      \
 *       5
 *
 * 而如果是 createBinaryTreeNodeByArr，则必须把每一层的每一个节点都写全，即使为null
 * 对比下
 * createBinaryTreeNodeByArr                                      |     LeetCode
 *   [                                                            |    [
 *     2                                                          |       2,
 *     null,3,                                                    |       null, 3,
 *     null,null,null,4,                                          |       null, 4,
 *     null,null,null,null,null,null,null,5                       |       null, 5,
 *  ]                                                             |    ]
 */
