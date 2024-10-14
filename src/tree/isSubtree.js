// https://leetcode-cn.com/problems/subtree-of-another-tree
/**
给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

示例 1:
给定的树 s:

     3
    / \
   4   5
  / \
 1   2
给定的树 t：

   4
  / \
 1   2
返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

示例 2:
给定的树 s：

     3
    / \
   4   5
  / \
 1   2
    /
   0
给定的树 t：

   4
  / \
 1   2
返回 false。
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (s === null && t === null) {
    return true;
  }
  if (s === null && t !== null) {
    return false;
  }
  if (isSameTree(s, t)) {
    return true;
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

var isSameTree = function (p, q) {
  if (p && q) {
    let val1 = p.val,
      left1 = p.left,
      right1 = p.right;
    let val2 = q.val,
      left2 = q.left,
      right2 = q.right;
    if (val1 !== val2) {
      return false;
    }
    return isSameTree(left1, left2) && isSameTree(right1, right2);
  } else {
    return p == q;
  }
};
