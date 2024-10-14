// https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof
/**
求 数组中的逆序对 的数量
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

示例 1:
输入: [7,5,6,4]
输出: 5
 
限制：
0 <= 数组长度 <= 50000
*/

//
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (nums.length <= 1) {
    return 0;
  }
  let count = 0;
  // 方法一，暴力求解，会出现超时
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

  return count;
};
