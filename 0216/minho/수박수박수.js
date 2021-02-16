function solution(n) {
  let answer = "";
  const su = "수";
  const bak = "박";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) answer += su;
    else answer += bak;
  }
  return answer;
}
