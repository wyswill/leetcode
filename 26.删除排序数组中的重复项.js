/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let res_obj = {};
  for (let index = 0; index < nums.length; index++) {
    let ele = nums[index];
    res_obj[ele] ? (nums.splice(index, 1), index--) : (res_obj[ele] = true);
  }
  return nums.length;
};
let nums = [1, 1, 2];
let res = removeDuplicates(nums);
console.log(res);
