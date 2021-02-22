function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let i2 = 0; i2 < numbers.length; i2++) {
      if (answer.includes(numbers[i] + numbers[i2]) === false) {
        if (i !== i2) {
          answer.push(numbers[i] + numbers[i2]);
        }
      }
    }
  }

  answer.sort(function (a, b) {
    return a - b;
  });
  console.log(answer);

  return answer;
}
