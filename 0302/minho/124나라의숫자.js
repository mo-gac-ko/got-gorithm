const solution = (n) => {
  let answer = "";

  while (n > 0) {
    let restNum = n % 3;
    n = Math.floor(n / 3);
    if (restNum == 0) {
      n--;
      restNum = 4;
    }
    answer += restNum;
  }
  return answer;
};
