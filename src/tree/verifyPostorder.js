// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof
/**
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true
 

提示：

数组长度 <= 1000
*/
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  // 要点：二叉搜索树中根节点的值大于左子树中的任何一个节点的值，小于右子树中任何一个节点的值，子树也是
  if (postorder.length <= 1) {
    return true;
  }
  // left,right,root
  // left < root, right > root
  function check(left, right) {
    if (left >= right) {
      return true;
    }

    let rootVal = postorder[right];
    let pos = left;
    // 查找左边紧邻的右子树范围:[pos,right-1]
    while (pos < right && postorder[pos] < rootVal) {
      pos++;
    }

    // 左子树需要全部都满足大于rootVal，否则就不合法
    for (let j = pos; j < right; j++) {
      if (postorder[j] < rootVal) {
        return false;
      }
    }

    let leftOk = check(left, pos - 1); // 左子树范围就 [left, pos-1]
    let rightOk = check(pos, right - 1); // 右子树范围 [pos,right-1]

    return leftOk && rightOk;
  }

  return check(0, postorder.length - 1);
};
