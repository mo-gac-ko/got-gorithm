function solution(n, m) {
  let getGcd = (n, m) => (n % m === 0 ? m : getGcd(m, n % m));

  let gcd = getGcd(n, m);
  let lcd = (n * m) / gcd;

  return [gcd, lcd];
}
