function solution(n, m) {
  let answer = [];
  //최대공약수
  while (m !== 0) {
    let gcd = n % m;
    n = m;
    m = gcd;
  }
  answer.push(n);
  //최소공배수

  return answer;
}
