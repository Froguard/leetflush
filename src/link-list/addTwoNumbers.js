// https://leetcode-cn.com/problems/add-two-numbers/
/**
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：
(2) → (4) → (3)
(5) → (6) → (4)

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

提示：
每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零
 */

/** 铺垫代码 */

/* 解题开始 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { ListNode, createTestCase, createLinkNode } = require('./com/LinkNode.js');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let firstNode = null,
    preNode = null;
  let a,
    b, // 加数
    sum, // 和
    carry = 0; // 进位
  while (node1 || node2) {
    a = node1 && node1.val ? node1.val : 0;
    b = node2 && node2.val ? node2.val : 0;
    sum = a + b + carry;
    carry = parseInt(sum / 10); // a,b,carry 均为0~9的个位数，相加不会超过2位数，即进位只会在第二位，/10即可
    sum = sum % 10;
    let tmpNode = new ListNode(sum);
    if (!preNode) {
      firstNode = tmpNode;
    } else {
      preNode.next = tmpNode;
    }
    preNode = tmpNode;
    // nextloop
    node1 = node1 && node1.next;
    node2 = node2 && node2.next;
  }
  if (carry) {
    preNode.next = new ListNode(carry);
  }
  return firstNode;
}

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//     let vals1 = getValsFromListNode(l1);
//     let vals2 = getValsFromListNode(l2);
//     // console.log(vals1, vals2);
//     /*
//     // 方法一，这种方法只能计算小数相加，对于大数相加会出现丢失精问题
//     let sumValsStr = '' + (parseInt(vals1.reverse().join('')) + parseInt(vals2.reverse().join('')));
//     let sumVals = sumValsStr.split('').map(s => parseInt(s)).reverse();
//     */
//     // 方法二，大数相加
//     let sumVals = bigAdd(vals1, vals2);
//     let sumNode = createLinkNode(sumVals);
//     return sumNode;
// };
// /**
//  *
//  * 要求这里的 vals1 和 vals2 中的数字顺序，是从低位开始排
//  * - 如数字 1234 对应的 vals 数组为 [4, 3, 2, 1]
//  * - 如数字 456 对应的 vals 数组为 [6, 5, 4]
//  * 1234 + 456 = bigAdd([4,3,2,1], [6,5,4]);
//  * @param {*} vals1
//  * @param {*} vals2
//  */
// function bigAdd(vals1, vals2) {
//     let longArr = vals1.length > vals2.length ? vals1 : vals2;
//     let shortArr = vals1.length > vals2.length ? vals2 : vals1;
//     let resVals = [];
//     let a,b, // 加数
//         sum, // 和
//         carry = 0; // 进位
//     for (let i = 0; i < longArr.length; i++) {
//         a = (i < shortArr.length ? shortArr[i] : 0);
//         b = longArr[i];
//         sum = a + b + carry;
//         carry = parseInt(sum / 10); // a,b,carry 均为0~9的个位数，相加不会超过2位数，即进位只会在第二位，/10即可
//         sum = sum % 10; //
//         resVals[i] = sum;
//     }
//     if (carry !== 0) {
//         resVals.push(carry);
//     }
//     return resVals;
// }
// // 通过链表第一个节点，获取数组
// function getValsFromListNode(ln) {
//     let vals = [];
//     let tmp = ln;
//     while (tmp) {
//         vals.push(tmp.val);
//         tmp = tmp.next;
//     }
//     return vals;
// }

/** 测试代码 */

// 常规小数相加
console.log(addTwoNumbers(...createTestCase([2, 4, 3], [5, 6, 4]))); // [ 7, 0, 8 ] → 708 = 342 + 465
console.log(addTwoNumbers(...createTestCase([0], [0]))); // [0] → 0 = 0 + 0
console.log(addTwoNumbers(...createTestCase([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))); // [8,9,9,9,0,0,0,1] → 89990001 = 9999999 + 9999
// 大数字相加
console.log(
  addTwoNumbers(
    ...createTestCase(
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [5, 6, 4],
    ),
  ),
);
// [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
