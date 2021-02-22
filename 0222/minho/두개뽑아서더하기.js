function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (i !== j) {
        // 동일한 인덱스가 아닐 경우에만 더하기
        const sum = numbers[i] + numbers[j];
        if (answer.indexOf(sum) === -1) {
          // 중복되는 연산 제외
          answer.push(sum);
        }
      }
    }
  }
  return answer.sort((a, b) => a - b); // 오름차순 정렬
}
