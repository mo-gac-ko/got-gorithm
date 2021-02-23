function solution(a, b) {
  let answer = 0;
  let i = 0;
  while (i < a.length) {
    let num1 = a[i];
    let num2 = b[i];
    let multi = num1 * num2;
    answer += multi;
    i++;
  }
  return answer;
}
