function solution(n) {
  var answer = 0;

  for (let index = 1; index <= n; index++) {
    if (n % index === 0) {
      answer += index;
    }
  }
  console.log(answer);
  return answer;
}
