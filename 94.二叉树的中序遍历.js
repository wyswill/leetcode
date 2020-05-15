/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var inorderTraversal = function (root) {
  let res = [];
  if (!root) return res;
  function fn(root) {
    if (root.left) fn(root.left);
    if (root) res.push(root.val);
    if (root.right) fn(root.right);
  }
  fn(root);
  return res;
};
// @lc code=end
