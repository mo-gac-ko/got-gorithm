function solution(n) {
  let answer = "";
  let rest = 0;

  while (n > 0) {
    rest = n % 3;
    n = parseInt(n / 3);

    if (rest == 0) {
      n -= 1;
      rest = 4;
    }
    answer = rest + answer;
  }

  return answer;
}
