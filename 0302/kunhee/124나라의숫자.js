function solution(n) {
  var answer = "";
  //문제는 그냥 4진법임
  //4진법으로 답을 구하고 3을 다시 4로 바꿔주는 방식
  console.log("n: " + n);
  let tmp = n;
  if (n > 3) {
    n = n + parseInt(n / 3);
    if (tmp % 3 === 0) {
      n--;
    }
  }

  console.log("바뀐n: " + n);

  answer = n.toString(4) + "";

  answer = answer.replace(/3/g, "4");

  console.log("제출한답: " + answer);

  return answer;
}
