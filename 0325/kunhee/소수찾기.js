function solution(n) {
  var answer = 0;

  for (let index = 2; index <= n; index++) {
    for (let index2 = 2; index2 <= index; index2++) {
      if (index % index2 === 0) {
        if (index2 !== index) {
          break;
        }
        answer++;
      }
    }
  }
  return answer;
}
