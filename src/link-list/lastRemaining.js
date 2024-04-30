// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof
/**
0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

示例 1：
输入: n = 5, m = 3
输出: 3

示例 2：
输入: n = 10, m = 17
输出: 2
 
限制：
1 <= n <= 10^5
1 <= m <= 10^6
*/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  // 方法一：笨方法，按照题意去写循环。但是执行效率比较低
  let arr = new Array(n).fill(0).map((v, i) => i);
  const distance = m - 1;
  let curPos = distance % n; // 取模为了让角标不会超过数组元素角标范围边界
  while (arr.length > 1) {
    arr.splice(curPos, 1); // 删除坐标为 curPos 的元素
    curPos = curPos + distance;
    curPos = curPos % arr.length;
  }
  return arr[0];
  // 方法二，既然是一个循环，那就用循环结构去做，比如循环链表。然后循环操作直至链表节点只剩下一个的时候
  // TODO，用循环链表 link-node 去实现这个逻辑

  // 方法三，利用数学原理，找出其数学规律，得到求解方程式，然后带入求解即可，但是对于数学功底要求会比较高！
  // TODO：比较难，等后边有空再弄吧，优先级不高
};
