function solution(record) {
  let result = [];
  let nickname = {}; // 아이디와 닉네임 매치하기 위한 객체생성

  // 로그 배열 생성
  let log = record.map((el) => el.split(" "));

  // 아이디와 닉네임 매치 (leave인 경우 undefined 예외처리!)
  for (let i = 0; i < log.length; i++) {
    if (log[i].length === 3) {
      nickname[log[i][1]] = log[i][2];
    }
  }

  // 값 출력
  for (let i = 0; i < log.length; i++) {
    if (log[i][0] === "Enter") {
      result.push(nickname[log[i][1]] + "님이 들어왔습니다.");
    } else if (log[i][0] === "Leave") {
      result.push(nickname[log[i][1]] + "님이 나갔습니다.");
    }
  }
  return result;
}
