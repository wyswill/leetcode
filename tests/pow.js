function pow(x, n) {
  let isFU = false;
  const t = n < 0 ? (Math.abs(n), (isFU = true)) : n;
  for (let index = 0; index < t.length; index++) {
    isFU ? (x /= t) : (x *= t);
  }
  return x;
}
// 2.00000, 10
console.log(pow(2.00000, 10));
