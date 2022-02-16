/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  let flag = false;
  if (s.length !== t.length) return flag;
  const s1 = s.split('').sort(),
    t1 = t.split('').sort();
  let i = 0;
  while (i < s1.length) {
    if (s1[i] !== t1[i]) return flag;
    i++;
  }
  return true;
}
// @lc code=end
let ss = 'anagram',
  t = 'nagaram';
console.log(isAnagram(ss, t));
