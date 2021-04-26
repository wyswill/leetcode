/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-26 15:13:02
 * @LastEditTime: 2021-04-26 16:11:26
 */
/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let index = digits.length - 1;
  let flag = digits[index] === 9;
  while (flag) {
    digits[index] = 0;
    if (index > 0) index--;
    else {
      digits.unshift(0);
      break;
    }
    flag = digits[index] >= 9;
  }
  digits[index]++;
  return digits;
}
// @lc code=end
const digits = [9,9,9];
console.log(plusOne(digits));
