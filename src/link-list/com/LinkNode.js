const util = require('util');

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// 为了方便输出节点的时候能够直接打出从该节点开始到结束的节点的值所组成的数组
const custom = util.inspect.custom || Symbol.for('util.inspect.custom');
ListNode.prototype[custom] = function () {
  return this.toString();
};
ListNode.prototype.toString = function () {
  let curNode = this;
  let tmp = curNode;
  let res = [];
  while (tmp) {
    tmp.val !== null && res.push(tmp.val);
    tmp = tmp.next;
  }
  return res;
};

// 通过数组，创建链表, values 中的顺序是链表的箭头顺序
function createLinkNode(values) {
  let newVals = [...values].reverse();
  let fistNode = null,
    next = null;
  for (let i = 0; i < newVals.length; i++) {
    let val = newVals[i];
    if (i === 0) {
      next = null;
      fistNode = new ListNode(val, next);
    } else {
      fistNode = new ListNode(val, next);
    }
    next = fistNode;
  }
  return fistNode;
}

// 生成测试用例,返回两个linkNode实例所组成的数组 [l1,l2]
function createTestCase(vals1, vals2) {
  return [createLinkNode(vals1), createLinkNode(vals2)];
}

module.exports = {
  ListNode,
  createLinkNode,
  createTestCase,
};
