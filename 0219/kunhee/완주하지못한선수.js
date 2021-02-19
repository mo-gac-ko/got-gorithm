function solution(participant, completion) {
  var answer = "";

  let result = [];
  for (let i = 0; i < participant.length; i++) {
    for (let i2 = 0; i2 < completion.length; i2++) {
      if (participant[i] === completion[i2]) {
        // if(){

        result.push(participant[i]);
        // }
      }
    }
  }

  return answer;
}
