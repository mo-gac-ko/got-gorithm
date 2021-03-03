function solution(dartResult) {
  var answer = 0;
  let tmp = dartResult.split("");

  let answerChar = "";
  let answerArr = [];

  answer = tmp.map((item, idx) => {
    if (isNaN(item)) {
      if (item === "S") {
        answerArr.push(answerChar * 1);
      } else if (item === "D") {
        answerArr.push(answerChar * answerChar);
      } else if (item === "T") {
        answerArr.push(answerChar * answerChar * answerChar);
      }
      if (item === "*") {
      }

      answerChar = "";
    } else {
      answerChar += item;
    }
  });
  console.log(answerArr);

  return answer;
}
