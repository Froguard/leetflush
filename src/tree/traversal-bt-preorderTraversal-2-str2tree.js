// https://leetcode-cn.com/problems/construct-binary-tree-from-string/
/**
你需要从一个包括括号和整数的字符串构建一棵二叉树。

输入的字符串代表一棵二叉树。它包括整数和随后的 0 ，1 或 2 对括号。整数代表根的值，一对括号内表示同样结构的子树。

若存在左子结点，则从左子结点开始构建。

示例：

输入："4(2(3)(1))(6(5))"
输出：返回代表下列二叉树的根节点:

       4
     /   \
    2     6
   / \   /
  3   1 5
 

提示：

输入字符串中只包含 '(', ')', '-' 和 '0' ~ '9' 
空树由 "" 而非"()"表示。
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
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  s = s.replace(/\s/g, '');
  if (s == '') {
    return null;
  }
  function parse(str) {
    // 1. 去除多余的空格
    str = str.replace(/\s/g, '');
    // 2. 去除外层括号，即左右 ()
    // if (str[0]=='(' && str[str.length-1] == ')') {
    if (str.match(/^\((.*)\)$/)) {
      //
      str = str.slice(1, -1);
    }
    // 3. 判断空则返回null
    if (str == '') {
      return null;
    }
    // 4. 去除数字，注意这里，数字可能是负数，即-xxx，且长度不一定为1，所以需要正则，匹配()前面的内容即可
    let valStr = str.match(/([^()]+)/)[0];
    let childStr = str.substr(valStr.length);
    let val = parseInt(valStr);
    let node = new TreeNode(val);
    if (childStr) {
      let { lStr, rStr } = parseChild(childStr);
      node.left = lStr ? parse(lStr) : null;
      node.right = rStr ? parse(rStr) : null;
    }
    return node;
  }
  return parse(s);
};

function parseChild(str) {
  let lStr = '';
  let rStr = '';
  if (!str) {
    return { lStr, rStr };
  }
  // 方法一，TODO：用正则做匹配
  // 方法二，用栈做括号的匹配
  let stack = [];
  let pos = [];
  for (let i = 0; i < str.length; i++) {
    let s = str[i];
    if (s == '(') {
      stack.push(i);
    }
    if (s == ')') {
      if (stack.length > 1) {
        stack.pop();
      } else if (stack.length == 1) {
        pos.push([stack.pop(), i]);
      } else {
        // error
        throw new Error('括号没有成对出现！');
      }
    }
  }
  let [r1, r2] = pos;
  if (r1 && r1.length) {
    lStr = str.substring(r1[0] + 1, r1[1]);
  }
  if (r2 && r2.length) {
    rStr = str.substring(r2[0] + 1, r2[1]);
  }
  // console.log(lStr, rStr);
  return { lStr, rStr };
}
