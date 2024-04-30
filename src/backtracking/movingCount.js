// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
/**
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20
*/
let caches = new Map();
/**
 * 求 num 的 “个位” + “十位” 的和
 * eg: 18 -> 十位1 + 个位8 -> 1+8=9
 * eg: 21 -> 十位2 + 个位1 -> 2+1=3
 * @param {*} num
 */
function getBs(num) {
  let res = caches.get(num);
  if (res === undefined) {
    let a = Math.floor(num / 10);
    let b = num % 10;
    res = a + b;
    caches.set(num, res);
  }
  return res;
}
let caches2 = new Map();
function getPosSum(row, col) {
  let key = `${row},${col}`;
  let sum = caches2.get(key);
  if (sum === undefined) {
    let r = getBs(row);
    let c = getBs(col);
    sum = r + c;
    caches2.set(key, sum);
  }
  return sum;
}
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let visited = [];
  for (let r = 0; r < m; r++) {
    visited[r] = new Array(n).fill(0);
  }

  function dfs(i, j) {
    let cnt = 0;
    /**
     * 核心思想：回溯算法（利用递归实现）
     *   1.先判定对应目标位置 (i,j) 是否能够被进入（满足坐标范围合法，同时PosSum<=k，同时避免重复计算）
     *   2.然后，因为它可达了，需要再判断其四周的四个位置（上下左右）是不是也有可能可达
     * 注意：为了防止同样的坐标(i,j) 的 posSum 被重复计算，这里利用备忘录将计算结果进行了缓存
     */
    if (0 <= i && i < m && 0 <= j && j < n && !visited[i][j] && getPosSum(i, j) <= k) {
      visited[i][j] = 1; // 表示已经访问过
      // 上下左右四个方向检查一下
      cnt = 1 + dfs(i - 1, j) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i, j + 1);
    }
    return cnt;
  }

  return dfs(0, 0); // 从坐标 (0,0) 开始尝试
};
