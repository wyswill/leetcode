/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [],
    t = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        let data = nums[i] + nums[j] + nums[k],
          key = `${nums[i]}${nums[j]}${nums[k]}`;
        if (data == 0) {
          if (!t[key]) {
            res.push([nums[i], nums[j], nums[k]]);
            t[key] = true;
          }
        }
      }
    }
  }
  console.log(t);
  console.log(res);
};
let nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
