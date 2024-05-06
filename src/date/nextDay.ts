// https://leetcode.cn/problems/next-day/description/

/*
2758.下一天

请你编写一个有关日期对象的方法，使得任何日期对象都可以调用 date.nextDay() 方法，然后返回调用日期对象的下一天，
格式为 YYYY-MM-DD 。


示例 1：
输入：date = "2014-06-20"
输出："2014-06-21"
解释：
const date = new Date("2014-06-20");
date.nextDay(); // "2014-06-21"

示例 2：
输入：date = "2017-10-31"
输出："2017-11-01"
解释：日期 2017-10-31 的下一天是 2017-11-01.
 
Constraints:
new Date(date) 是一个有效的日期对象 
*/

// 调试命令: ts-node ./src/date/nextDay.ts

declare global {
  interface Date {
    nextDay(): string;
  }
}

const ONE_DAY = 24 * 60 * 60 * 1000;

function leftPad(n: number) {
  return `${n < 10 ? 0 : ''}${n}`;
}

Date.prototype.nextDay = function (): string {
  const curTime = this.getTime();
  const nextTime = curTime + ONE_DAY;
  const nextDay = new Date(nextTime);
  return [nextDay.getFullYear(), leftPad(nextDay.getMonth() + 1), leftPad(nextDay.getDate())].join('-');
};

/**
 * const date = new Date("2014-06-20");
 * date.nextDay(); // "2014-06-21"
 */
