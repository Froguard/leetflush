/**
 * 旋转数组【中等】
 * // https://www.nowcoder.com/practice/e19927a8fd5d477794dac67096862042?tpId=295&tqId=1024689&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/rotate-array
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 旋转数组
 * @param n int整型 数组长度
 * @param m int整型 右移距离
 * @param a int整型一维数组 给定数组
 * @return int整型一维数组
 */
function solve(n, m, a) {
  if (n == 1 || m == 0) {
    return a;
  }
  /*
	// 方法一，会超时
	while (m > 0) {
		let tmp = a.pop();
		a.unshift(tmp);
		m--;
	}
	*/
  if (m >= n) {
    m = m % n;
  }
  const start = n - m;
  let newArr = a.slice(start); // 右移之后被挪出去的部分，存起来
  a.splice(start, m); // 删除掉被挪出去的部分
  a.unshift(...newArr); // 将删除掉部分重新塞入到前面去
  return a;
}

module.exports = {
  solve: solve,
};
