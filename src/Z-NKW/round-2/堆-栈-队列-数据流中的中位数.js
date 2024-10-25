/**
 * 数据流中的中位数
 * // https://www.nowcoder.com/practice/9be0172896bd43948f8a32fb954e1be1?tpId=295&tqId=23457&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 *
 */

const values = [];

function Insert(num) {
  addNumInSortedArr(values, num);
  // console.log(`插入${num}后：`, values);
}
function GetMedian() {
  const half = Math.floor(values.length / 2);
  if (values.length % 2 === 0) {
    return (values[half] + values[half - 1]) / 2;
  } else {
    return values[half];
  }
}

/**
 * 在升序数组中插入元素，同时保障插入后还是升序的
 * @param {Array<number>} sortedNums
 * @param {number} num
 * @returns {void} 无返回，直接在数组中插入
 */
function addNumInSortedArr(sortedNums, num) {
  if (!sortedNums.length) {
    sortedNums.push(num);
    return;
  }
  let i = 0;
  while (sortedNums[i] < num) {
    i++;
  }
  sortedNums.splice(i, 0, num); // 增加一个元素
}

module.exports = {
  Insert: Insert,
  GetMedian: GetMedian,
};
