// https://leetcode-cn.com/problems/path-sum-iii
//
/**
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return 0;
  }

  function getCount(targetNode) {
    let count = 0;
    let paths = [];
    function traversal(node, sum = 0 /*, path = []*/) {
      if (!node) {
        return;
      }
      let { left, right, val } = node;
      const newSum = sum + val;
      // let newPath = path.concat(val);
      if (newSum == targetSum) {
        count++;
        // paths.push(newPath.join('→'));
      }
      // 特别注意，此处就算加出了目标的和，但是不要截断，需要继续判断，因为后续还是会出现满足的目标和
      left && traversal(left, newSum /*, newPath*/);
      right && traversal(right, newSum /*, newPath*/);
    }
    traversal(targetNode, 0);
    // console.log(`以节点${targetNode.val}为起始，满足条件情况有 ${count}`, paths.length ? paths : '');
    return count;
  }

  let res = 0;
  function calc(node) {
    if (!node) {
      return;
    }
    res += getCount(node);
    let { left, right } = node;
    left && calc(left);
    right && calc(right);
  }

  calc(root);
  return res;
};
