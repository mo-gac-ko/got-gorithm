function solution(arr, divisor) {
  var answer = [];

  arr.map((item, idx) => {
    if (item % divisor === 0) {
      answer.push(item);
    }
  });
  if (answer.length === 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => {
    return a - b;
  });

  return answer;
}
