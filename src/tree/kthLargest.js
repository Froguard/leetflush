// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof
/**
给定一棵二叉搜索树，请找出其中第k大的节点。


示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
 
限制：
1 ≤ k ≤ 二叉搜索树元素个数
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  // 分析，搜索二叉树的中序遍历，是一个递增数组！！！
  function inorderTraversal(root) {
    if (!root) {
      return [];
    }
    let { val, left, right } = root;
    let res = [];
    left && res.push(...inorderTraversal(left));
    res.push(val); // 中序遍历是最后才加根节点
    right && res.push(...inorderTraversal(right));
    return res;
  }
  let res = inorderTraversal(root);
  return res[res.length - k];
};
