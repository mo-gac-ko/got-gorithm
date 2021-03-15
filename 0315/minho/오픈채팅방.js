function solution(record) {
  let answer = [];
  let checkNickName = {};
  let logger = record.map((log) => log.split(" "));

  // 가장 최근 닉네임을 checkUserName 객체에 저장하는 반복문
  logger.forEach((log) => {
    // 닉네임이 undefined 일 경우 제외하고
    if (log.length > 2) {
      checkNickName[log[1]] = log[2];
    }
  });

  // 채팅 로그를 answer 배열에 저장하는 반복문
  logger.forEach((log) => {
    // uid로 가장 최근의 닉네임 조회
    let currentNickName = checkNickName[log[1]];
    // Change일 경우 해당 루프 통과
    if (log[0] === "Change") {
      return;
    } else if (log[0] === "Enter") {
      answer.push(`${currentNickName}님이 들어왔습니다.`);
    } else if (log[0] === "Leave") {
      answer.push(`${currentNickName}님이 나갔습니다.`);
    }
  });
  return answer;
}
