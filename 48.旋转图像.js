/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 * 
 * 给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {};
// @lc code=end
/**
 * (0,0)->arr.length
 * (arr.length,0)->(0,0)
 * (0,1)->(1,arr.length)
 * (1,0)->(0,1)
 *
 */
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
