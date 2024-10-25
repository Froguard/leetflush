/**
 * 寻找第K大
 * // https://www.nowcoder.com/practice/e016ad9b7f0b45048c58a9f27ba618bf?tpId=295&tqId=44581&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param a int整型一维数组
 * @param n int整型
 * @param K int整型
 * @return int整型
 */
function findKth(a, n, K) {
  // 方法一，直接 sort（原生的 sort 函数，性能已经很不错，能够做到 80ms 时间 + 8MB 内存，很不错了）
  a.sort((a, b) => b - a); // 倒序排序
  return a[K - 1];

  // 方法二，自行实现排序，然后边排边判断，如果发现已经把前 K 个元素排出来了，则提前结束循环
  /*
	// 冒泡排序，每一轮都能把最大的数选出来排到前面，当第 K 轮的时候，就出结果了
	// 实际上，并没有比方法一快，两者差不多的
	for (let i = 0; i < K; i++) {
			for (let j = i; j < a.length; j++) {
					if (a[i] < a[j]) {
							swap(a, i, j);
					}
			}
	}
	return a[K - 1];
	*/
}

/*
// 交换 i 和 j 元素的位置
function swap(arr, i, j) {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}
*/

module.exports = {
  findKth: findKth,
};
