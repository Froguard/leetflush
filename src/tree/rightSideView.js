// https://leetcode-cn.com/problems/binary-tree-right-side-view
/**
二叉树的右视图

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/
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
var rightSideView = function (root) {
  /**
   * 层序遍历，然后找到每一层的最右边的节点即可
   */
  let res = [];
  function traversal(node, depth = 0) {
    if (!node) {
      return;
    }
    let { val, left, right } = node;
    res[depth] = res[depth] || [];
    res[depth].push(val);
    left && traversal(left, depth + 1);
    right && traversal(right, depth + 1);
  }
  traversal(root, 0);
  // console.log(res);
  return res.map(row => row.pop());
};
