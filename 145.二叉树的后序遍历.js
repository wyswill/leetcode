/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let res = [];
  if (!root) return res;
  function fn(root) {
    if (root.left) fn(root.left);
    if (root.right) fn(root.right);
    if (root) res.push(root.val);
  }
  fn(root);
  return res;
};
// @lc code=end

