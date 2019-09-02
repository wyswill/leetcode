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
  // if (nums1.length < m + n) nums1.length = m + n;
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[i] < nums1[j]) {
        let t = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = t;
      }
    }
  }
  console.log(nums1);
};
let nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6],
  m = 3,
  n = 3;
nums1.length = m;
nums2.length = n;
merge(nums1, m, nums2, n);
