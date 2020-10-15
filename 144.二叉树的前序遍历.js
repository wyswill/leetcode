/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const tree = {
  val: 1,
  left: {
    val: 4,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (node) {
  let res = [];
  if (!node) return res;
  function fn(node) {
    if (node) res.push(node.val);
    if (node.left) fn(node.left);
    if (node.right) fn(node.right);
  }
  fn(node);
  return res;
};
// @lc code=end
