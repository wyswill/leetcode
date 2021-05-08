/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-05-07 18:06:48
 * @LastEditTime: 2021-05-07 18:32:21
 */
/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
  let resIndex = 0,
    left = 0,
    right = nums.length - 1,
    find = true;
  const check = (index: number) => {
    if (index === 0 || index === nums.length - 1) return;
    const current = nums[index],
      left = nums[index - 1],
      right = nums[index + 1];
    if (current > left && current > right) {
      resIndex = index;
      find = false;
    }
  };
  while (find) {
    if (left === right) {
      check(left);
      return resIndex;
    }
    if (left >= nums.length || right < 0) return resIndex;
    check(left);
    check(right);
    left++;
    right--;
  }

  return resIndex;
}
// @lc code=end

const numsArr = [2, 1];
console.log(findPeakElement(numsArr));
