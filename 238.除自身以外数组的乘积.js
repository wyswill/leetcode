/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const input = [0, 0];
var productExceptSelf = function (nums) {
  const res = [];
  let ji = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (element > 0) ji = element * ji;
    else ji = 0;
  }
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (element == 0) res[i] = 0;
    else res[i] = ji / element;
  }
  return res;
};
console.log(productExceptSelf(input));

// @lc code=end
