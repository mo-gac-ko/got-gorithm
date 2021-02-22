function solution(numbers) {
  var result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (i !== j) {
        result.push(sum);
      }
    }
  }
  return Array.from(new Set(result)).sort((a, b) => a - b);
}

// Set을 사용하면 유니크한 Set객체를 반환함.
// Set객체를 다시 Array.from으로 배열로 변경!
