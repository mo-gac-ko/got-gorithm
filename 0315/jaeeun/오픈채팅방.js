function solution(record) {
  let result = [];
  let actions = ["님이 들어왔습니다.", "님이 나갔습니다"];
  record.map((i) => {
    let log = i.split(" ");
    if (log[0] === "Enter") {
      let nickname = log[2];
      result.push(nickname + actions[0]);
    } else if (log[0] === "leave") {
      result.push(log[2] + actions[1]);
    } else log[0] === "change";
    let nickname = log[2];
    result.push(nickname + actions[0]);
  });
  return result;
}

//못품
