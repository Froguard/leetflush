// https://leetcode-cn.com/problems/lru-cache
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

// 【警告】该实现并没有跑通 leetcode 的测试用例！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.store = Object.create(null); // {}
  this.bakStore = Object.create(null); // {}
  this.capacity = capacity;
  console.log(`创建缓存，容量为 ${capacity}`);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let item = this.store[key];
  // 主存储区未找到，则尝试从副存储区去找
  if (!item) {
    item = this.bakStore[key];
    item && this.update(key, item.value);
  }
  let value = item ? item.value : -1;
  console.log(`get(${key}); 返回`, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 更新
  this.update(key, value);
  console.log(`put(${key}, ${value}); 之后:`, this.stores());
};

LRUCache.prototype.update = function (key, value) {
  // 先查找下是否有这个值
  let item = this.store[key];
  if (this.capacity === 1) {
    // 容量只有 1
    this.store = Object.create(null);
  } else {
    // 容量 >= 2
    if (!item) {
      // 当他不存在需要新增时，需要判断容量是否超标了，如果超标，则需要先处理更新下来两个存储区
      if (Object.keys(this.store).length >= this.capacity - 1) {
        this.bakStore = this.store;
        this.store = Object.create(null); // clear store
      }
    }
  }
  item = item || {};
  item.value = value;
  this.store[key] = item;
};

/**
 * 获取主副存储区内容
 */
LRUCache.prototype.stores = function () {
  let etrs = Object.entries(this.store).map(([k, v]) => `${k}=${v && v.value}`);
  let etrsb = Object.entries(this.bakStore).map(([k, v]) => `${k}=${v && v.value}`);
  return this.capacity === 1 ? [etrs.join(',')] : [etrs.join(','), etrsb.join(',')];
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

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

// // test2
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

let lRUCache4 = new LRUCache(10);
for (let i = 1; i <= 9; i++) {
  lRUCache4.put(i, i);
}
lRUCache4.put(10, 10);
lRUCache4.put(1, 101);
for (let i = 1; i <= 9; i++) {
  lRUCache4.put(10 + i, 10 + i);
}
lRUCache4.put(10, 100);
