/**
 * 数组中的逆序对
 * // https://www.nowcoder.com/practice/96bd6684e04a44eb80e6a68efc0ec6c5?tpId=295&tqId=23260&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
function InversePairs(nums) {
  if (nums.length <= 1) {
    return 0;
  }
  let count = 0;
  // 方法一，暴力求解，会出现超时（测试用例最后一个会挂掉，先弃用这个办法）
  /*
	for(let i = 0; i <= nums.length; i++){
			for(let j = i+1; j <= nums.length; j++){
					if(nums[i] > nums[j]) {
							count++;
					}
			}
	}
	*/
  // 方法二，归并排序
  function mergeSort(nums) {
    if (nums.length == 1) {
      return nums;
    }
    let { left, right } = splitArr(nums);
    return mergeArr(mergeSort(left), mergeSort(right));
  }
  function splitArr(arr) {
    const LEN = arr.length;
    if (LEN > 1) {
      let mid = Math.floor(LEN / 2);
      return { left: arr.slice(0, mid), right: arr.slice(mid, LEN) };
    }
  }
  function mergeArr(arr1, arr2) {
    let res = [];
    const LEN1 = arr1.length;
    const LEN2 = arr2.length;
    let i1 = 0;
    let i2 = 0;
    while (i1 < LEN1 && i2 < LEN2) {
      let a1 = arr1[i1];
      let a2 = arr2[i2];
      if (a1 <= a2) {
        res.push(a1);
        i1++;
      } else {
        // 逆序对
        res.push(a2);
        i2++;
        // 此时，a2 已经比 a1 小，而 a1 是 arr1 中的最小元素，则说明剩下的元素也都比 a2 小，即，这样的逆序对还有 LEN1 - i1 个
        count += LEN1 - i1; // 计数
      }
    }
    while (i1 < LEN1) {
      res.push(arr1[i1]);
      i1++;
    }
    while (i2 < LEN2) {
      res.push(arr2[i2]);
      i2++;
    }
    return res;
  }
  mergeSort(nums);
  // let newNums = mergeSort(nums);
  // console.log(newNums);

  return count % 1000000007;
}
module.exports = {
  InversePairs: InversePairs,
};
