// https://leetcode-cn.com/problems/lru-cache
// https://leetcode-cn.com/problems/lru-cache-lcci/
/**
LRU 缓存机制

运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例：
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4

提示：
1 <= capacity <= 3000
0 <= key <= 3000
0 <= value <= 104
最多调用 3 * 104 次 get 和 put
*/

/**
 * 将两个双线链表节点连起来, node1 <--> node2
 * - 当 node1=null 且 node2!=null，表示将 node2 设置为链表「首元素」
 * - 当 node1!=null 且 node2=null，表示将 node1 设置为链表「尾元素」
 * - 当 node1 和 node2 同时为 null，没有任何效果，无意义的操作
 * @param {*} node1
 * @param {*} node2
 */
function linkNodes(node1, node2) {
  node1 && (node1.next = node2);
  node2 && (node2.pre = node1);
}

/**
 * 删除对应的node
 *
 * node1 <--> node2 <--> node3
 *          ↓↓↓
 *   removeNode(node2);
 *          ↓↓↓
 * node1 <--> node3
 *
 * @param {*} node
 */
function removeNode(node) {
  if (node) {
    linkNodes(node.pre, node.next);
    node.pre = null;
    node.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.first = null;
  this.last = null;
  this.data = Object.create(null); // {}
  this.capacity = capacity;
  console.log(`创建缓存，容量为 ${capacity}`);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let item = this.data[key];
  let res = -1;
  if (item) {
    this.update(key);
    res = item.value;
  }
  console.log(`get(${key});得到：`, res, '之后内容为：', this.toString());
  return res;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  console.log(`put(${key},${value});`);
  let item = this.data[key];
  if (item) {
    // 更新
    this.update(key, value);
  } else {
    // 新增
    item = {
      key,
      value,
      pre: null,
      next: null,
    };
    if (this.first === null && this.last === null) {
      // 添加的第一个元素
      this.first = this.last = item;
    } else {
      //
      linkNodes(item, this.first);
      this.first = item;
    }
    // 添加
    this.data[key] = item;

    // 添加之后检查是否超量
    let curCapacity = Object.keys(this.data).length;
    if (curCapacity > this.capacity) {
      const lastKey = this.last.key;
      console.log(
        `  put(${key},${value});之后, 元素将超量(${curCapacity}>${this.capacity})，将删除最不常用元素：${lastKey}`,
      );
      // 删除链表上的对应元素
      let secondLast = this.last.pre;
      removeNode(this.last);
      linkNodes(secondLast, null); // 确保在 removeNode 之后执行
      this.last = secondLast;
      // 删除data上对应元素
      delete this.data[lastKey];
    }
  }
  console.log(`  put(${key},${value});之后：`, this.toString());
};

/**
 * 更新元素的新鲜度（双链表中的位置），越靠前越新鲜
 * - 新鲜度：将作为容量满的时候删除元素的参考，新鲜度最低的将会被删除
 * @param {*} key
 * @param {*} value
 */
LRUCache.prototype.update = function (key, value) {
  let item = this.data[key];
  if (!item) {
    throw new Error('不要更新不存在的数据节点');
  }
  let needChangeValue = value !== undefined;
  if (needChangeValue) {
    item.value = value;
  }
  let resetFirst = newFirst => {
    newFirst.pre = null;
    linkNodes(newFirst, this.first);
    this.first = newFirst;
  };
  let { pre, next } = item;
  if (pre === null && next === null) {
    // 唯一节点
    return;
  } else if (pre === null && next !== null) {
    // 首节点
    return;
  } else if (pre !== null && next === null) {
    // 尾节点
    item.pre.next = null;
    this.last = item.pre;
    resetFirst(item);
    // console.log('FIRST:', this.first, 'LAST:', this.last);
  } else {
    // 中间节点
    linkNodes(item.pre, item.next); // 将 item 的上一节点 pre，和下一节点 next 直接连起来
    resetFirst(item);
  }
};

LRUCache.prototype.toString = function () {
  let fresh = [];
  let node = this.first;
  while (node) {
    let { key, value } = node;
    fresh.push(`${key}=${value}`);
    node = node.next;
  }
  return fresh;
};

//  test1
// let lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // -1 (未找到)
// lRUCache.get(3);    // 3
// lRUCache.get(4);    // 4

// console.log('\n-----------\n');

// test2
// let lRUCache2 = new LRUCache(1);
// lRUCache2.put(2, 1); // 缓存是 {2=1}
// lRUCache2.get(2); // 1
// lRUCache2.put(3, 2); // 缓存是 {3=2}, 2=1这个数据被抹除了
// lRUCache2.get(2); // -1
// lRUCache2.get(3); // 2

// console.log('\n-----------\n');

// test3
// let lRUCache3 = new LRUCache(2);
// lRUCache3.get(1); // -1
// lRUCache3.put(2, 6); // 缓存是 {2=6}
// lRUCache3.put(1, 5); // 缓存是 {2=6,1=5}
// lRUCache3.put(1, 2); // 缓存是 {2=6,1=2}
// lRUCache3.get(1); // 2
// lRUCache3.get(2); // 6
