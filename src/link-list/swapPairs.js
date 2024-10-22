/**
 * 两两交换链表中的节点
 * https://leetcode.cn/problems/swap-nodes-in-pairs/?envType=study-plan-v2&envId=top-100-liked
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 示例 1：
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 * 示例 2：
 * 输入：head = []
 * 输出：[]
 *
 * 示例 3：
 * 输入：head = [1]
 * 输出：[1]
 *
 * 提示：
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 <= Node.val <= 100
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
var swapPairs = function (head) {
  if (!head) {
    return null;
  }
  const values = getValuesByListNode(head);
  let list1 = [];
  let list2 = [];
  for (let j = 1; j < values.length; j += 2) {
    list1.push(values[j]);
  }
  for (let i = 0; i < values.length; i += 2) {
    list2.push(values[i]);
  }
  let cur = head;
  let i = 0;
  while (list1.length || list2.length) {
    let v;
    if (list1.length && list2.length) {
      v = i % 2 === 0 ? list1.shift() : list2.shift();
    } else {
      v = list1.length ? list1.shift() : list2.shift();
    }
    cur.val = v;
    cur = cur.next;
    i++;
  }

  return head;
};

// 获取链表中每个节点的值，并组成数组
function getValuesByListNode(head) {
  let values = [];
  let cur = head;
  while (cur) {
    values.push(cur.val);
    cur = cur.next;
  }
  return values;
}
