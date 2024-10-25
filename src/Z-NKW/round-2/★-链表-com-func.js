/**
 * 根据链表求出每个节点的值，然后以数组返回
 * @param {ListNode} head
 * @returns {Array<number>} values 链表中每个节点的值所组成的数组
 */
function getValsByNode(head) {
  const values = [];
  let cur = head;
  while (cur) {
    const { val, next } = cur;
    values.push(val);
    cur = next;
  }
  return values;
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
  let i = 0;
  while (sortedNumsArr[i] < num) {
    i++;
  }
  sortedNumsArr.splice(i, 0, num); // 增加一个元素
}

// const myList = [0, 0, 1, 2, 3, 4, 5, 6, 7, 99, 100];
// addNumInSortedArr(myList, 0);
// console.log(myList);
