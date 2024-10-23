/**
 * 合并K个已排序的链表并，返回合并后的列表。【困难】
 * // https://www.nowcoder.com/practice/65cfde9e5b9b4cf2b6bafa5f3ef33fa6?tpId=295&tqId=724&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param lists ListNode类一维数组
 * @return ListNode类
 */
function mergeKLists(lists) {
  // 为了节省空间，可以将这几个链表首尾相连，变成一个大的链表
  let firstHead = 0;
  const sortedVals = [];
  let preTail = { next: null };
  for (const head of lists) {
    if (!head) {
      continue;
    }
    if (!firstHead) {
      firstHead = head;
    }
    preTail.next = head;
    const curTail = findTailNode(head, node => addNumInSortedArr(sortedVals, node.val));
    preTail = curTail;
  }
  // console.log('sortedVals:', sortedVals);

  return resetNodeByVals(firstHead, sortedVals);
}

/**
 * 在升序数组中插入元素，同时保障插入后还是升序的
 * @param {Array<number>} sortedNumsArr
 * @param {number} num
 * @returns {void} 无返回，直接在数组中插入
 */
function addNumInSortedArr(sortedNumsArr, num) {
  if (!sortedNumsArr.length) {
    sortedNumsArr.push(num);
    return;
  }
  let insertPos = sortedNumsArr.length;
  for (let i = sortedNumsArr.length - 1; i >= 0; i--) {
    const tmp = sortedNumsArr[i];
    if (num >= tmp) {
      insertPos = i + 1;
      break;
    } else {
      // num < tmp
      insertPos = i;
      continue;
    }
  }
  // console.log('插入位置为：', insertPos);
  sortedNumsArr.splice(insertPos, 0, num);
}

/**
 * 根据新的值列表，重置链表
 * - 需要要求 head 的长度 >= values 的长度
 * - 当 values 长度比 head 长度短时，以 values 为准，即head链表可能会被改变
 * @param {ListNode} head
 * @param {Array<number>} values
 * @returns {ListNode} 原链表的首节点， 即 head
 */
function resetNodeByVals(head, values) {
  let cur = head;
  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    if (!cur) {
      break;
    }
    cur.val = val;
    if (i === values.length - 1) {
      cur.next = null; // 重要，必须保障末尾元素的 next 置空，让 head 的长度和 values 的长度强制一致！
    } else {
      cur = cur.next;
    }
  }
  return head;
}

/**
 * 找到链表的尾部节点
 * @param {ListNode} head
 * @param {Function} eachFunc 遍历的回调函数
 * @returns tail
 */
function findTailNode(head, eachFunc) {
  if (!head) {
    return null;
  }
  const needCallBack = typeof eachFunc === 'function';
  let tail = head;
  let index = 0;
  needCallBack && eachFunc(tail, index);
  while (tail.next) {
    tail = tail.next;
    needCallBack && eachFunc(tail, ++index);
  }
  return tail;
}

module.exports = {
  mergeKLists: mergeKLists,
};
