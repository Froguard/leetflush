// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
/**
合并两个有序链表
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：

(1) → (2) → (4)
+merge+
(1) → (3) → (4)
↓↓↓
(1) → (1) → (2) → (3) → (4) → (4)

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]


示例 2：
输入：l1 = [], l2 = []
输出：[]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]
 
提示：
两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { ListNode, createTestCase } = require('./com/LinkNode.js');
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} 备注，当返回的ListNode实例为null时，叛题会输出空数组 []
 */
var mergeTwoLists = function (l1, l2) {
  /**
   * 分析：
   * 1.两个链表，l1和l2，均为升序的
   * 2.l1和l2的顺序并不是递减
   */
  // 方法二，深递归
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
  // 方法二，循环
  /*
    let tmp1 = l1,
        tmp2 = l2;
    let firstNode = null,
        preNode = null;
    while(tmp1 && tmp2) { // 先处理交集部分
        let tmpNode = null;
        if (tmp1.val < tmp2.val) {
            tmpNode = new ListNode(tmp1.val);
            tmp1 = tmp1 && tmp1.next;
        } else {
            tmpNode = new ListNode(tmp2.val);
            tmp2 = tmp2 && tmp2.next;
        }
        // loop
        if (preNode === null) { // 首次
            firstNode = tmpNode;
        } else {
            preNode.next = tmpNode;
        }
        preNode = tmpNode;
    }
    if (!tmp1 && tmp2) {
        if (preNode) {
            preNode.next = tmp2;
        } else {
            return tmp2;
        }
    }
    if (tmp1 && !tmp2) {
        if (preNode) {
            preNode.next = tmp1;
        } else {
            return tmp1;
        }
    }
    if (!tmp1 && !tmp2) {
        return null;
    }
    return firstNode;
    */
};

console.log(mergeTwoLists(...createTestCase([1, 2, 4], [1, 3, 4]))); // [1,1,2,3,4,4]
console.log(mergeTwoLists(...createTestCase([], []))); // []
console.log(mergeTwoLists(...createTestCase([], [0]))); // []
