/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length - i; j++) {
      for (let k = j; k < nums.length - j; k++) {
        let data = nums[i] + nums[j] + nums[k];
        if (data == 0) {
          const tp = nums[i];
          if (!(nums[i] === nums[j] && nums[i] === nums[k]))
            res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
