// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof
// https://leetcode-cn.com/problems/path-sum-ii/
//
/**
输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 

示例:
给定如下二叉树，以及目标和 target = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]
 
提示：
节点总数 <= 10000
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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  if (!root) {
    return [];
  }

  let res = [];
  function traversal(node, sum = 0, path = []) {
    if (!node) {
      return;
    }
    let { left, right, val } = node;
    sum += val;
    let newPath = path.concat(val);
    if (sum == target && !left && !right) {
      // 叶子节点，且和为目标
      res.push(newPath);
    } else {
      left && traversal(left, sum, newPath);
      right && traversal(right, sum, newPath);
    }
  }
  traversal(root);
  return res;
};
