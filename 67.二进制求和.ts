/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-26 16:22:08
 * @LastEditTime: 2021-04-26 16:38:48
 */
/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let maxStr = [],
    minStr = [];
  if (a.length > b.length) {
    maxStr = a.split("");
    minStr = b.split("");
  } else {
    maxStr = b.split("");
    minStr = a.split("");
  }
  //  1001
  // 11101
  for (let i = minStr.length - 1; i >= 0; i--) {
    const curMa = maxStr[i],
      curMin = minStr[i];
    const sum: number = Number(curMa) + Number(curMin);
    if (sum > 1) {
      maxStr[i] = "0";
      maxStr[i - 1]++;
    } else maxStr[i] = sum;
  }

  return maxStr.join("");
}
// @lc code=end

const a = "11",
  b = "1";
console.log(addBinary(a, b));
