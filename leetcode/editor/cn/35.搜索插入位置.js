/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let res = "";
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];
    if (ele > target || ele == target) {
      res = i;
      break;
    }
    if (ele < target) {
      res = i + 1;
    }
  }
  return res;
};
let res = searchInsert([1, 3, 5, 6], 0);
console.log(res);
