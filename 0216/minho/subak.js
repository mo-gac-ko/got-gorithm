function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    const su = "수";
    const bak = "박";
    if (i % 2 === 1) answer += su;
    else answer += bak;
  }
  return answer;
}
