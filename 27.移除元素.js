/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];
    ele == val ? (nums.splice(i, 1), i--) : "";
  }
  console.log(nums);

  return nums.length;
};
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
