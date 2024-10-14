// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof
/**
判断子结构

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true
限制：

0 <= 节点个数 <= 10000
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) {
    return false;
  }
  if (isSameStruct(A, B)) {
    return true;
  }
  return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function isSameStruct(p, q) {
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
    return (!left2 || isSameStruct(left1, left2)) && (!right2 || isSameStruct(right1, right2));
  } else {
    return p == q;
  }
}
