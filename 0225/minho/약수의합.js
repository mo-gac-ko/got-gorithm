function solution(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (n === 0) {
      answer.push(0);
    } else if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.reduce((a, b) => a + b);
}
