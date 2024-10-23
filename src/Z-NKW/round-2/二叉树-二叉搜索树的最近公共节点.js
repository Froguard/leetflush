/**
 * 二叉搜索树的最近公共祖先【简单】-其实挺难的
 * // https://www.nowcoder.com/practice/d9820119321945f588ed6a26f0a6991f?tpId=295&tqId=2290592&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // // https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree
 * // https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 * // https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 * // https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
 */
/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
function lowestCommonAncestor(root, p, q) {
  const path1 = [];
  calcPathFromRoot(root, p, path1);
  // console.log('path1:', path1);
  const path2 = [];
  calcPathFromRoot(root, q, path2);
  // console.log('path2:', path2);

  let comVal = root.val;
  while (path1.length && path2.length) {
    const v1 = path1[0];
    const v2 = path2[0];
    if (v1 === v2) {
      comVal = v1;
      path1.shift();
      path2.shift();
    } else {
      break;
    }
  }
  return comVal;
}

function calcPathFromRoot(root, v, path) {
  if (!root) {
    return;
  }
  const { left, val, right } = root;
  path.push(val);
  if (val === v) {
    return;
  }
  if (v < val) {
    left && calcPathFromRoot(left, v, path);
  } else {
    right && calcPathFromRoot(right, v, path);
  }
}

module.exports = {
  lowestCommonAncestor: lowestCommonAncestor,
};
