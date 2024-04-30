// https://leetcode-cn.com/problems/hanota-lcci
/**
【重点】汉诺塔

在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只能放在更大的盘子上面)。移动圆盘时受到以下限制:
(1) 每次只能移动一个盘子;
(2) 盘子只能从柱子顶端滑出移到下一根柱子;
(3) 盘子只能叠在比它大的盘子上。

请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。

你需要原地修改栈。

示例1:

 输入：A = [2, 1, 0], B = [], C = []
 输出：C = [2, 1, 0]
示例2:

 输入：A = [1, 0], B = [], C = []
 输出：C = [1, 0]
提示:

A中盘子的数目不大于14个。
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
  // return move(A.length, A, B, C, ['A', 'B', 'C']);
  return move(A.length, A, B, C);
  // 作弊法：
  // while (A.length) {
  //     C.push(A.shift());
  // }
};
/**
 * 整体解决方案:  stackA --[e1~en]--> stackC
 * -「塔1-stackA」有 n 块元素
 * - 需要将这 n 块元素全部借助 「临时塔-stackB」的帮助，全部移动至「塔2-stackC」
 * @param {number} n 需要移动的元素数量
 * @param {number[]} stackA
 * @param {number[]} stackB
 * @param {number[]} stackC
 * @param {string[]} stackNames 栈名字，分别对应stackA，tmp，stackC的名字
 */
function move(n, stackA, stackB, stackC, stackNames) {
  /**
   * 分析:
   * - 要将 n 个所有元素都从 塔A 移动至 塔C，可以看做是不停地将「最底下的元素n」移动至 塔C，
   * - 要想将最底部的元素 n 移动至 塔C，其倒数第一二步一定是
   *     - 先将 n 元素之上的所有元素 (1~n-1) 全部移动至 临时塔
   *     - 然后将 n 元素通过移动一步，到达最终目标 塔C
   *     - 最后将 元素 (1~n-1) 全部移动至 塔C
   * 即：move(n,A,B) 等效于三步：
   *     - 第一步：move(n-1,A,B)
   *     - 第二步：moveOne(n,A,C) 或 moveOne(A,C)
   *     - 第三步：move(n-1,B,C)
   *
   *     A     B     C                  A       B       C                  A       B       C                  A     B       C
   *                        第一步                              第二步                              第三步
   *     |     |     |                  |       |       |                  |       |       |                  |     |       |
   *     |     |     |                  |       |       |                  |       |       |                  |     |    ┌──|──┐
   *    [1]    |     |                  |       |       |                  |       |       |                  |     |    │ [1] │
   *     |     |     |  move(n-1,A,B)   |    ┌──|──┐    | moveOne(n,A,C)   |    ┌──|──┐    |  move(n-1,B,C)   |     |    │  |  │
   *    [2]    |     | =============>>  |    │ [1] │    | =============>>  |    │ [1] │    | =============>>  |     |    │ [2] │
   *     |     |     |                  |    │  |  │    |                  |    │  |  │    |                  |     |    │  |  │
   *    ...    |     |                  |    │ [2] │    |                  |    │ [2] │    |                  |     |    │ ... │
   *     |     |     |                  |    │  |  │    |                  |    │  |  │    |                  |     |    │  |  │
   *   [n-1]   |     |                  |    │ ... │    |                  |    │ ... │    |                  |     |    │[n-1]│
   *     |     |     |                  |    │  |  │    |                  |    │  |  │    |                  |     |    └──|──┘
   *    [n]    |     |                 [n]   │[n-1]│    |                  |    │[n-1]│   [n]                 |     |      [n]
   *     |     |     |                  |    └──|──┘    |                  |    └──|──┘    |                  |     |       |
   * ____|_____|_____|____          ____|_______|_______|____          ____|_______|_______|____          ____|_____|_______|____
   *
   * 上述动作中，关于 (1~n-1) 的整体移动，又可以拆分长 1~n-2 的移动 以及 n-1 的移动
   * 周而复始的拆分，直至拆分到1
   */
  if (n == 0) {
    return;
  }
  const [nameA, nameB, nameC] = stackNames || [];
  if (n == 1) {
    moveOne(stackA, stackC, [nameA, nameC]);
    return;
  }
  let needPrint = nameA && nameB && nameC;
  needPrint && console.log(`> MoveElememts: ${nameA} --[e1~e${n}]--> ${nameC}:`);

  // 第一步：move: [0~n-1], stackA -> stackB
  move(n - 1, stackA, stackC, stackB, [nameA, nameC, nameB]);

  // 第二步：moveOne: n, stackA -> stackC
  moveOne(stackA, stackC, [nameA, nameC]);

  // 第三步：move: [0~n-1], stackB -> stackC
  move(n - 1, stackB, stackA, stackC, [nameB, nameA, nameC]);

  needPrint && console.log(`< MoveElememts: ${nameA} --[e1~e${n}]--> ${nameC}. Finished!`);
}

/**
 * 将「塔1」顶部元素，移动到「塔2」顶部去，如果没办法移动，则会抛出异常
 * @param {*} stackA
 * @param {*} stackC
 * @param {*} stackName2 栈名称，纯粹是为了能够输出，方便理解
 */
function moveOne(stackA, stackC, stackNames = []) {
  // move one
  let target = stackA.pop();
  safePush(stackC, target);
  // log print
  let [name1, name2] = stackNames || [];
  let needPrint = name1 && name2;
  needPrint && console.log(`  MoveOne: ${name1} --${target}--> ${name2}`);
}

/**
 * 安全的将目标放入栈中，确保栈顶元素一定是最小，从栈顶到栈底顺序是满足从小到大的
 * 当不满足该条件时，直接抛出异常
 * @param {number[]} stack
 * @param {number} val
 */
function safePush(stack, val) {
  if (stack.length == 0 || (stack.length > 0 && stack[stack.length - 1] > val)) {
    stack.push(val);
  } else {
    throw new Error(`无法将 ${val} 放到塔顶（当前塔顶元素 top(${stack[stack.length - 1]}) < val(${val})!`);
  }
}

// let a = [1], b = [], c = [];
// hanota(a, b, c);
// console.log(c);

// let a0 = [2,1], b0 = [], c0 = [];
// hanota(a0, b0, c0);
// console.log(c0);

// let a1 = [3,2,1], b1 = [], c1 = [];
// hanota(a1, b1, c1);
// console.log(c1);

// let a2 = [4,3,2,1], b2 = [], c2 = [];
// hanota(a2, b2, c2);
// console.log(c2);

let a3 = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  b3 = [],
  c3 = [];
hanota(a3, b3, c3);
console.log(c3);
