// https://leetcode-cn.com/problems/construct-string-from-binary-tree
/**

你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。

空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。

示例 1:

输入: 二叉树: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

输出: "1(2(4))(3)"

解释: 原本将是“1(2(4)())(3())”，
在你省略所有不必要的空括号对之后，
它将是“1(2(4))(3)”。

示例 2:

输入: 二叉树: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

输出: "1(2()(4))(3)"

解释: 和第一个示例相似，
除了我们不能省略第一个对括号来中断输入和输出之间的一对一映射关系。
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  return preorderTraversal(t).slice(1, -1);
};
function preorderTraversal(root) {
  // 老的常规的前序遍历
  // if (!root) {
  //     return [];
  // }
  // let {val, left, right} = root;
  // let res = [];
  // res.push(val); // 前序遍历是优先才加根节点
  // left && res.push(...preorderTraversal(left));
  // right && res.push(...preorderTraversal(right));
  // return res;

  // 稍微改造一下即可
  if (!root) {
    return '()';
  }
  let { val, left, right } = root;
  if (!left && !right) {
    // 叶子节点
    return `(${val})`;
  }
  if (!left && right) {
    return `(${val}()${preorderTraversal(right)})`; // 左节点为空时候，不可以省略
  }
  if (left && !right) {
    return `(${val}${preorderTraversal(left)})`;
  }
  if (left && right) {
    return `(${val}${preorderTraversal(left)}${preorderTraversal(right)})`;
  }
}
