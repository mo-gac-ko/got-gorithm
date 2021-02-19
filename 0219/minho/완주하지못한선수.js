function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();
  for (let i = 0; i <= participant.length - 1; i++) {
    if (participant[i] !== completion[i] || completion[i] === undefined) {
      // 참가자의 마지막 인덱스에 탈락자가 있을 경우
      answer = participant[i];
      break;
    }
  }
  return answer;
}
