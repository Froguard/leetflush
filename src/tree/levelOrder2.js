// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof
/**
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回：

[3,9,20,15,7]
 
提示：
节点总数 <= 1000
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
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  function traversal(node, depth) {
    if (!node) {
      return;
    }
    res[depth] = res[depth] === undefined ? [] : res[depth];
    let { left, right, val } = node;
    res[depth].push(val);
    left && traversal(left, depth + 1);
    right && traversal(right, depth + 1);
  }
  traversal(root, 0);
  // 拍平
  let vals = [];
  res.forEach(r => vals.push(...r));
  return vals;
};
