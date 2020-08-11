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
var productExceptSelf = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let _tempValue = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j == i) continue;
      let currentVal = nums[j];
      _tempValue *= currentVal;
    }
    res[i] = _tempValue;
  }
  return res;
};
// @lc code=end
productExceptSelf([1, 2, 3, 4]);
