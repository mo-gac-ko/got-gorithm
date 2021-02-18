function solution(phone_number) {
  let blind = phone_number.length - 4;
  let answer = "*".repeat(blind) + phone_number.substr(-4, 4);
  return answer;
}
