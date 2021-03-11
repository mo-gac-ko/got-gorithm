function solution(number, k) {
  let answer = "";
  let array = [];
  const targetNumber = number.length - k;
  let newNumber = number.split("");

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      array.push(number[i] + number[j]);
    }
  }
  array.sort((a, b) => b - a);

  answer = array.slice(0, 1).toString();

  return answer;
}
