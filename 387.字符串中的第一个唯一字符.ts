/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  type Tinfo = {
    [key: string]: {
      index: number;
      nume: number;
    };
  };
  let index = -1;
  const map: Tinfo = {};
  let i = 0;
  while (i < s.length) {
    const chat = s[i];
    let info = map[chat];
    if (!info) {
      info = {
        index: i,
        nume: 1
      };
    } else {
      info.nume++;
    }
    map[chat] = info;
    i++;
  }
  for (const key in map) {
    if (Object.prototype.hasOwnProperty.call(map, key)) {
      const element = map[key];
      if (element.nume === 1) return element.index;
    }
  }
  return index;
}
// @lc code=end
let s = 'aabb';
console.log(firstUniqChar(s));
