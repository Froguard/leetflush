// https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree
/**
给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

示例 1：
输入：root = [1,null,3,2,4,null,5,6]
输出：3

示例 2：
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：5
*/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;
  function travel(node, depth) {
    if (!node) {
      return 0;
    }
    if (!node.children || !node.children.length) {
      // 叶子节点
      depth += 1;
      max = Math.max(depth, max);
    } else {
      node.children.forEach(c => travel(c, depth + 1));
    }
  }
  travel(root, 0);
  return max;
};
