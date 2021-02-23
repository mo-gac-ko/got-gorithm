function solution(a, b) {
  var answer = 1234567890;
  let test = 0;

  for (let i = 0; i < a.length; i++) {
    test += a[i] * b[i];
  }
  answer = test;

  return answer;
}
