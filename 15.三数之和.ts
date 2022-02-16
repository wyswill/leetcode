/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-26 16:44:06
 * @LastEditTime: 2021-04-26 17:11:03
 */
/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const res = new Set<string>();
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i; j < nums.length - 1; j++) {
      for (let k = j; k < nums.length - 1; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          if (nums[j] === 0 && nums[k] === 0 && nums[i] === 0) {
            continue;
          }
          res.add([nums[i], nums[j], nums[k]].sort().join());
        }
      }
    }
  }
  return Array.from(res.values()).map(ele =>
    ele.split(",").map(ele => Number(ele)),
  ) as number[][];
}
// @lc code=end
const nums = [0, 0, 0];
console.log(threeSum(nums));
