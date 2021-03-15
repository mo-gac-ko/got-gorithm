function solution(record) {
  let answer = [];
  let checkUserName = {};
  let logger = record.map((log) => log.split(" "));

  // 가장 최근 닉네임을 checkUserName 객체에 저장하는 반복문
  logger.forEach((log, i) => {
    checkUserName[log[1]] = log[2];
  });

  // 채팅 로그를 answer 배열에 저장하는 반복문
  logger.forEach((log) => {
    let currentName = checkUserName[log[1]];

    if (log[0] === "Enter") {
      answer.push(`${currentName}님이 들어왔습니다.`);
    } else if (log[0] === "Leave") {
      answer.push(`${currentName}님이 나갔습니다.`);
    }
  });
  return answer;
}
