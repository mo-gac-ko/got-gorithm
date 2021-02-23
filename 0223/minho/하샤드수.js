function solution(x) {
  let answer = true;
  let splitNumber = x.toString().split("");
  let digitSum = 0;
  splitNumber.forEach((item) => (digitSum += Number(item)));
  if (x % digitSum !== 0) {
    return !answer;
  }
  return answer;
}
