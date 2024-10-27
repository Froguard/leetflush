/**
 * 判断是不是完全二叉树【中等】
 * // https://www.nowcoder.com/practice/8daa4dff9e36409abba2adbe413d6fae?tpId=295&tqId=2299105&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 *
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
 * @return bool布尔型
 */
function isCompleteTree(root) {
  const list = [];
  function travel(node, depth = 0) {
    if (!node) {
      add2List(list, depth, null);
      return depth;
    }
    const { left, right, val } = node;
    add2List(list, depth, val);
    // next loop
    depth += 1;
    const hL = travel(left, depth);
    const hR = travel(right, depth);
    return Math.max(hL, hR);
  }

  const h = travel(root, 0);

  // console.log(h, ':', list);

  let isOk = true;
  for (let i = 0; i < h; i++) {
    const arr = list[i];
    // 1.删除尾巴上连续带有的 null (中间的null并不会删除，要留作判断用)
    while (arr[arr.length - 1] === null) {
      arr.pop();
    }
    // 2.判断每层结构是否正确
    if (i === h - 1) {
      // 2.1.情况1：对于最后一层，判断排除掉 null 节点数之后的长度是否和原长度一致，eg: [1,2,null,3]、[null,1,2,3]、[1,2,null,3] 这几种情况，均不满足条件
      if (arr.length > arr.filter(v => v !== null).length) {
        isOk = false;
        break;
      }
    } else {
      // 2.2.情况2：对于非最后一层，即常规层，需要判断盖层节点数，是否为 2^i (即：2的i次方)
      if (arr.length !== 2 ** i) {
        isOk = false;
        break;
      }
    }
  }

  // console.log('hahaha', list);
  return isOk;
}

function add2List(arr, depth, val) {
  if (!arr[depth]) {
    arr[depth] = [];
  }
  arr[depth].push(val);
}

module.exports = {
  isCompleteTree: isCompleteTree,
};
