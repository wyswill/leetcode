/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let lessArr: number[] = [],
    moreArr: number[] = [];
  if (nums1.length > nums2.length) {
    lessArr = nums2.sort();
    moreArr = nums1.sort();
  } else {
    lessArr = nums1.sort();
    moreArr = nums2.sort();
  }
  const disc: { [key: number]: boolean } = {},
    commDisc: { [key: number]: boolean } = {};
  for (const ele of lessArr) {
    disc[ele] = true;
  }
  for (const ele of moreArr) {
    if (disc[ele]) commDisc[ele] = true;
  }
  return Object.keys(commDisc).map(e => +e);
}
// @lc code=end
