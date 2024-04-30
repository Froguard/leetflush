// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
/**
删除链表的倒数第 N 个结点

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？

示例 1：

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

示例 2：
输入：head = [1], n = 1
输出：[]

示例 3：
输入：head = [1,2], n = 1
输出：[1]
 

提示：

链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null || head.next == null) {
    return null;
  }
  // 等间距的两个指针
  let delNode = head;
  let preDel = null;
  let tmp = head;
  let i = 0;
  while (tmp) {
    if (i > n - 1) {
      preDel = delNode;
      delNode = delNode.next;
    }
    i++;
    tmp = tmp.next;
  }
  console.log(`需要删除坐标为 ${i - n} 的节点`);
  // console.log(preDel, delNode);

  if (preDel === null) {
    return delNode.next;
  } else {
    removeNode(preDel, delNode); // preNode.next = targetNode ? targetNode.next : null;
    return head;
  }
};

function removeNode(preNode, targetNode) {
  if (preNode) {
    preNode.next = targetNode ? targetNode.next : null;
  }
}
