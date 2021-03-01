// 못풀었음.

function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    answer += 1;
    budget -= d[i];
    if (budget < 0) break;
  }
  return answer;
}
