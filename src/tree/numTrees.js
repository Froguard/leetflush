// https://leetcode-cn.com/problems/unique-binary-search-trees
/**
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:
输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n <= 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return genBSTs(1, n);
};

const cache = new Map();
// 生成从 start 到 end 范围内的所有二叉搜索树时，其范围数量
function genBSTs(start, end) {
  if (start > end) {
    return 1; // 只包含一个空节点的树，即，空树
  }
  let key = `${start}-${end}`;
  let total = cache.get(key);
  if (total === undefined) {
    total = 0;
    for (let i = start; i <= end; i++) {
      // 生成所有可能的左子树
      const leftBSTsLen = genBSTs(start, i - 1);
      // 生成所有可能的右子树
      const rightBSTsLen = genBSTs(i + 1, end);
      let count = leftBSTsLen * rightBSTsLen;
      total += count;
    }
    cache.set(key, total);
  }
  return total;
}

/**
 * @param {number} n
 * @return {number}
 */
var numTrees2 = function (n) {
  if (n <= 0) {
    return 0;
  }
  // 生成从 start 到 end 范围内的所有二叉搜索树
  function genBSTs(start, end) {
    if (start > end) {
      return [null]; // 只包含一个空节点的树，即，空树
    }
    let res = [];
    for (let i = start; i <= end; i++) {
      // 生成所有可能的左子树
      const leftBSTs = genBSTs(start, i - 1);
      // 生成所有可能的右子树
      const rightBSTs = genBSTs(i + 1, end);
      // 循环
      for (let left of leftBSTs) {
        for (let right of rightBSTs) {
          const root = new TreeNode(i);
          root.left = left;
          root.right = right;
          // 记录一下
          res.push(root);
        }
      }
    }
    return res;
  }

  let trees = genBSTs(1, n);
  return trees.length;
};

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
