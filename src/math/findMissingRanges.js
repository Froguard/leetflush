// https://leetcode-cn.com/problems/missing-ranges
/**
给定一个排序的整数数组 nums ，其中元素的范围在 闭区间 [lower, upper] 当中，返回不包含在数组中的缺失区间。

示例：
输入: nums = [0, 1, 3, 50, 75], lower = 0 和 upper = 99,
输出: ["2", "4->49", "51->74", "76->99"]
*/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  let res = [];
  function pushRes(s, e) {
    let r = s === e ? '' + s : `${s}->${e}`;
    !res.includes(r) && res.push(r);
  }
  // 先处理几种特殊的边界逻辑（如情况123），方便简化后边的处理逻辑（情况4）
  if (nums.length == 0) {
    // 【情况1】：空数组
    pushRes(lower, upper);
  } else if (lower === upper) {
    // 【情况2】：目标区间只包含一个值
    !nums.includes(lower) && pushRes(lower, lower);
  } else if (nums.length === 1) {
    // 【情况3】：单元素数组
    let n = nums[0];
    if (n === lower) {
      pushRes(lower + 1, upper);
    } else if (n === upper) {
      pushRes(lower, upper - 1);
    } else {
      pushRes(lower, n - 1);
      pushRes(n + 1, upper);
    }
  } else {
    // 【情况4】：其他
    let start = lower,
      end = upper;
    for (let i = 0; i < nums.length; i++) {
      let n = nums[i];
      console.log('> n=', n, `（即nums[${i}]）`, 'start=', start, 'end=', end);
      if (i === nums.length - 1) {
        if (start === n) {
          start = n + 1;
        }
        if (n < upper) {
          console.log(
            `   n(=${n}) is lastone in nums & n(=${n}) < upper(=${upper}), push elems after n(=${n}), n+1 → upper: `,
            start,
            upper,
          );
          pushRes(start, upper);
        }
      } else {
        if (start === lower && lower < n) {
          console.log(
            `   n(=${n}) is firstone in nums & lower(=${lower}) < n(=${n}), push elems before n(=${n}), lower → n-1: `,
            start,
            n - 1,
          );
          pushRes(lower, n - 1);
        }
        // 处理完首元素之后，还需要继续处理后面的元素
        let next = nums[i + 1];
        if (next === n + 1) {
          // serial 下一个元素是连续的，继续下一轮判断
          console.log(`   n(=${n}), next(=${next}) is equal to n+1(=${next}), serial! continue.`);
          start = next;
          end = upper; // 此句有点多余，可不要，因为每次循环start和end都会重新计算赋值
        } else {
          // non-serial 下一个元素是非连续的，则可以开始确定丢失范围
          start = n + 1;
          end = next - 1;
          console.log(
            `   n(=${n}), next(=${next}) is not equal to n+1(=${n + 1}), push elems between n and next, n+1 → next-1: `,
            start,
            end,
          );
          pushRes(start, end);
          start = next + 1;
          end = upper; // 此句有点多余，可不要，因为每次循环start和end都会重新计算赋值
        }
      }
      console.log('< n=', n, 'start=', start, 'end=', end, '\n');
    }
  }
  //
  return res;
};
