function solution(n) {
  let answer = "";
  let rest = 0;

  while (n > 0) {
    rest = n % 3;
    n = parseInt(n / 3); //parseInt() : 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환

    if (rest == 0) {
      n -= 1;
      rest = 4;
    }
    answer = rest + answer;
  }

  return answer;
}
