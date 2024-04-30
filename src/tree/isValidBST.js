// https://leetcode-cn.com/problems/validate-binary-search-tree
/**
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // BST 的中序遍历，是一个严格递增的数组，判断一下即可
  let res = [];
  function inOrder(node) {
    if (!node) {
      return;
    }
    let { left, right, val } = node;
    left && inOrder(left);
    // 可以优化的点：
    // 在 res.push 时，查看末尾元素和待加入元素，是否为递增关系，如果不是，则直接判定为失败
    res.push(val);
    right && inOrder(right);
  }
  inOrder(root);
  // console.log(res);

  let isValid = true;
  for (let i = 0; i < res.length; i++) {
    if (res[i - 1] >= res[i]) {
      isValid = false;
      break;
    }
  }
  return isValid;
};
