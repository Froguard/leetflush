// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree
/**
给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：

结点左子树中所含结点的值小于等于当前结点的值
结点右子树中所含结点的值大于等于当前结点的值
左子树和右子树都是二叉搜索树
例如：
给定 BST [1,null,2,2],
   1
    \
     2
    /
   2
返回[2].
提示：如果众数超过1个，不需考虑输出顺序

进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）
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
var findMode = function (root) {
  if (!root) {
    return [];
  }
  // 用额外空间记录，递归遍历每个节点，记录每个val出现的次数
  let occur = Object.create(null);
  function traversal(node) {
    if (!root) {
      return;
    }
    let { val, left, right } = node;
    if (occur[`${val}`] !== undefined) {
      occur[`${val}`] = occur[`${val}`] + 1;
    } else {
      occur[`${val}`] = 1;
    }
    left && traversal(left);
    right && traversal(right);
  }
  traversal(root);

  // 将记录进行从大到小排序
  let tmp = Object.entries(occur);
  tmp.sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
  // console.log('tmp', tmp);
  let maxOne = tmp[0],
    maxName = parseInt(maxOne[0]),
    maxVal = maxOne[1];
  let res = [maxName];
  // console.log(maxName, maxVal);
  // 判断是否有多个一样的大最大值
  for (let i = 1; i < tmp.length; i++) {
    let [n, c] = tmp[i];
    if (maxVal === c) {
      res.push(parseInt(n));
    } else {
      break;
    }
  }
  console.log(res);
  return res;
};
