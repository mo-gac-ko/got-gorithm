function solution(dartResult) {
  var answer = 0;

  /**
   * 한글자씩 나누어 담은 배열
   */
  let tmp = dartResult.split("");

  /**
   * 한글자씩 체크할때 쓸 변수
   */
  let answerChar = "";

  /**
   * 숫자를 계산할때 쓸 배열
   */
  let answerArr = [];

  tmp.map((item, idx) => {
    //글자가 숫자가 아닐때
    if (isNaN(item)) {
      if (item === "S") {
        answerArr.push(answerChar * 1);
      } else if (item === "D") {
        answerArr.push(answerChar * answerChar);
      } else if (item === "T") {
        answerArr.push(answerChar * answerChar * answerChar);
      }
      if (item === "*") {
        answerArr[answerArr.length - 1] = answerArr[answerArr.length - 1] * 2;
        if (answerArr[answerArr.length - 2]) {
          answerArr[answerArr.length - 2] = answerArr[answerArr.length - 2] * 2;
        }
      }
      if (item === "#") {
        answerArr[answerArr.length - 1] = answerArr[answerArr.length - 1] * -1;
      }

      //한글자마다 체크하고 넘어갈때 초기화시킨다.
      answerChar = "";
    } else {
      //숫자일때 answerChar에다가 모은다.
      answerChar += item;
    }
  });
  //다 계산된 숫자들이 담긴 배열을 합산한다.
  answer = answerArr.reduce((acc, crr) => acc + crr, 0);

  return answer;
}
