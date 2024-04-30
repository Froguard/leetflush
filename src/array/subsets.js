// https://leetcode-cn.com/problems/subsets
/**
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [[]];
  /*
    // 方法一，当数组长度超过 9 时，运行会超时 n=8时，执行时间300ms，n=9时，1.7s，n=10直接超时
    function permute(arr) {
        let unq = new Set();
        function _permutation(alreadyList = [], waitList = []){
            if (alreadyList.length >= 1) {
                unq.add(alreadyList.sort((a,b)=>(a-b)).join(','));
                if (alreadyList.length == nums.length) {
                    return;
                }
            }
            for (let i = 0; i < waitList.length; i++) {
                let wi = waitList[i];
                let newAlreadyList = alreadyList.concat(wi);
                let newWaitlist = waitList.filter((_, idx)=> (idx != i) );
                _permutation(newAlreadyList, newWaitlist);
            }
        }
        _permutation([], arr);
        return [...unq].map(str => str.split(',').map(s => parseInt(s)));
    }
    res.push(...permute(nums));
    res.sort((a,b)=>(a.length-b.length));
    */
  // 方法二，贪心算法 TODO
  return res;
};
