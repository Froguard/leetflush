// https://leetcode-cn.com/problems/invert-binary-tree
// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
/**
翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：
谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 简单的递归翻转即可
  if (!root) {
    return null;
  }
  let { left, right } = root;
  left && invertTree(left);
  right && invertTree(right);
  root.right = left;
  root.left = right;
  return root;
};
