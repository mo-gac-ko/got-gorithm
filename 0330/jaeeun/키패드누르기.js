function solution(numbers, hand) {
  let answer = "";
  let current_L = "*";
  let current_R = "#";

  for (let num of numbers) {
    if (num == 1 || num == 4 || num == 7) {
      answer += "L";
      current_L = num;
      // console.log("left", current_L);
    } else if (num == 3 || num == 6 || num == 9) {
      answer += "R";
      current_R = num;
      // console.log("right", current_R);
    } else {
      // 2, 5, 8 ,0 인 경우
    }
  }

  // console.log(answer);
  return answer;
}
