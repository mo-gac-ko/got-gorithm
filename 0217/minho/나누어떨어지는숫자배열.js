function solution(arr, divisor) {
  let answer = [];
  arr.forEach((item) => {
    // arr 배열의 모든 원소 순회
    if (item % divisor === 0) {
      // 배열의 각 원소가 divisor로 나누어 떨어진다면
      answer.push(item);
    }
  });
  answer.sort((a, b) => a - b); // 오름차순 정렬 알고리즘
  if (answer.length === 0) return [-1];
  // answer가 빈 배열이라면
  else return answer;
}
