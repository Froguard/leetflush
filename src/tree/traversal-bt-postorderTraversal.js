// https://leetcode-cn.com/problems/binary-tree-postorder-traversal
/**
二叉树的后序遍历

给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
var postorderTraversal = function (root) {
  // 方法一：递归
  if (!root) {
    return [];
  }
  let { val, left, right } = root;
  let res = [];
  left && res.push(...postorderTraversal(left));
  right && res.push(...postorderTraversal(right));
  res.push(val); // 后序遍历是最后才加根节点
  return res;
  // 方法二：栈+循环
  // TODO:
};
