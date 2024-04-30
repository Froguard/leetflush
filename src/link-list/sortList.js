// https://leetcode-cn.com/problems/sort-list
// https://leetcode-cn.com/problems/insertion-sort-list/
/**
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

进阶：

你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 

示例 1：


输入：head = [4,2,1,3]
输出：[1,2,3,4]
示例 2：


输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
示例 3：

输入：head = []
输出：[]
 

提示：

链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) {
    return null;
  }

  let res = [];
  // 使用插入排序的逻辑进行循环插入到res中
  function insertRes(targetNode) {
    let v = targetNode.val;
    let hasInserted = false;
    for (let i = res.length - 1; i >= 0; i--) {
      let node = res[i];
      if (node.val < v) {
        let newNode = new ListNode(v);
        const oldNext = node.next;
        newNode.next = oldNext;
        node.next = newNode;
        res.splice(i + 1, 0, newNode); // 插入到 i 元素后边，所以需要 i+1
        hasInserted = true;
        break;
      }
    }
    if (!hasInserted) {
      let newNode = new ListNode(v);
      if (res.length > 0) {
        let first = res[0];
        newNode.next = first;
      }
      res.unshift(newNode);
    }
  }
  while (head) {
    insertRes(head);
    head = head.next;
  }
  return res[0];
};
