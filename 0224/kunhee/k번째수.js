function solution(array, commands) {
  let answer = [];

  for (let index in commands) {
    answer.push(
      array
        .slice(commands[index][0] - 1, commands[index][1])
        .sort((a, b) => a - b)[commands[index][2] - 1]
    );
  }

  console.log(answer);

  return answer;
}
