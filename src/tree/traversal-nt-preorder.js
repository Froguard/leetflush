// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal
/**
【注意】：
- N叉树 只有 前序 和 后序 两种遍历方式，没有中序！！
- 原因：由于N叉树的子节点数量不确定，所以父节点没有中间这个概念，故而没有 N 叉树的中序遍历！！！

N 叉树的前序遍历

给定一个 N 叉树，返回其节点值的 前序遍历 。

N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。

进阶：

递归法很简单，你可以使用迭代法完成此题吗?

示例 1：

输入：root = [1,null,3,2,4,null,5,6]
输出：[1,3,5,6,2,4]
示例 2：

输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]

提示：
N 叉树的高度小于或等于 1000
节点总数在范围 [0, 10^4] 内
*/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  // 方法一：递归
  if (!root) {
    return [];
  }
  let { val, children } = root;
  let res = [val]; // 前序遍历是优先加入根节点
  for (let c of children) {
    c && res.push(...preorder(c));
  }
  return res;
  // 方法二：栈+循环
  // TODO:
};
