function solution(participant, completion) {
  var answer = "";
  for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
      if (participant[i] !== completion[j]) {
        answer = participant[i];
        console.log(answer);
      }
    }
  }
  return answer;
}
