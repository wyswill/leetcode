/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (nums1.length < m + n) nums1.length = (nums1.length + m + n) * 0.5;
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }
};
let nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6],
  m = 3,
  n = 3;
