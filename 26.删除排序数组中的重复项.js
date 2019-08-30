/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let res_obj = {},
    res_arr = [];
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];
    if (res_obj[ele]) continue;
    else {
      res_obj[ele] = true;
      res_arr.push(ele);
    }
  }
  return res_arr;
};
let nums = [
  0,
  4,
  5,
  4,
  5,
  4,
  2,
  5,
  2,
  6,
  7,
  2,
  3,
  4,
  5,
  3,
  4,
  5,
  0,
  1,
  1,
  1,
  2,
  2,
  3,
  3,
  4
];
let res = removeDuplicates(nums);
console.log(res);
