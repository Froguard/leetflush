// https://leetcode.cn/problems/hPov7L/
// https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/
/**
给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

示例1：
输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
解释:
          1
         / \
        3   2
       / \   \  
      5   3   9 

      示例2：
输入: root = [1,2,3]
输出: [1,3]
解释:
          1
         / \
        2   3
示例3：
输入: root = [1]
输出: [1]

示例4：
输入: root = [1,null,2]
输出: [1,2]
解释:      
           1 
            \
             2     
示例5：
输入: root = []
输出: []
 

提示：
二叉树的节点个数的范围是 [0,104]
-2^31 <= Node.val <= 2^31 - 1 
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
 * @return {number[]}
 */
var largestValues = function (root) {
  const maxValList = [];
  /**
   * 便利
   * @param {TreeNode} root
   * @param {number} depth
   */
  function travel(root, depth = 0) {
    if (!root) {
      return;
    }
    const { val, left, right } = root;
    if (val === undefined || val === null) {
      return;
    }
    let curDepthMax = maxValList[depth];
    if (curDepthMax === undefined || curDepthMax === null) {
      curDepthMax = val;
    } else {
      curDepthMax = val > curDepthMax ? val : curDepthMax;
    }
    maxValList[depth] = curDepthMax;
    // next depth
    left && travel(left, depth + 1);
    right && travel(right, depth + 1);
  }
  //
  travel(root, 0);
  //
  return maxValList;
};
