function solution(record) {
  //정답 제출용
  var answer = [];

  /**
   * 아이디와 이름을 매핑할 Object
   */
  let mappingNameById = {};

  /**
   * 입장과 퇴장 기록을 담아둘 배열
   */
  let tmpEnterLeaveArr = [];

  record.map((item) => {
    //record로부터 받는 값을 구분자 공백기준으로
    //미리 split해놓는다(1번째, 2번째, 3번째)
    let firstString = item.split(" ")[0];
    let secondString = item.split(" ")[1];
    let trdString = item.split(" ")[2];

    //입장이거나 퇴장일때
    if (firstString === "Enter" || firstString === "Leave") {
      //입장 퇴장 배열에 추가
      tmpEnterLeaveArr.push(firstString + " " + secondString);

      if (firstString === "Enter") {
        //재입장인 상황을 고려하여 입장할때마다 해당 아이디에 매핑된 닉네임을 바꿔준다.
        mappingNameById[secondString] = trdString;
      }
    } else {
      //Change인 경우 해당 아이디에 매핑된 아이디값을 바꿔준다.
      mappingNameById[secondString] = trdString;
    }
  });

  //입장 퇴장 기록을 가지고 해당 아이디에 매핑된 닉네임을 합쳐서 출력해준다.
  tmpEnterLeaveArr.map((item) => {
    let tmpStringArr = item.split(" ");
    if (tmpStringArr[0] === "Enter") {
      answer.push(`${mappingNameById[tmpStringArr[1]]}님이 들어왔습니다.`);
    } else {
      answer.push(`${mappingNameById[tmpStringArr[1]]}님이 나갔습니다.`);
    }
  });

  // console.log(mappingNameById)

  return answer;
}
