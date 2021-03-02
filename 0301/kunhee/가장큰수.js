//내 풀이 (시간초과 뜨는것들은 성공인지 실패인지도 알수가 없음)
//아마 다 성공은 아닐것으로 예상
function solution(numbers) {
  var answer = "";
  let tmp = [];

  for (let i = 0; i < numbers.length; i++) {
    let forAnswer = numbers[i];

    for (;;) {
      if (forAnswer >= 1000) {
        forAnswer = forAnswer / 10;
        break;
      }
      forAnswer = forAnswer * 10;
    }
    tmp.push([i, forAnswer]);
  }
  tmp.sort((a, b) => {
    return b[1] - a[1];
  });
  // console.log(tmp)

  for (let i = 0; i < tmp.length; i++) {
    answer += numbers[tmp[i][0]];
  }

  return answer;
}

//찾은 풀이
function solution(numbers) {
  var answer = numbers
    .map((c) => c + "") //String형태로 변환
    .sort((a, b) => b + a - (a + b)) // 예를 들어 a=1과 b=10을 비교할 경우, (a+b)는 11이 아닌 110이 되고, (b+a)는 101이 된다.
    .join(""); // 정렬 후 합치기

  return answer[0] === "0" ? "0" : answer; // 방어 조건
}
//이 문제는 두 문자열을 이어서 비교하는 (b+a) - (a+b)가 핵심
//이 방법만 잘 생각이 나면 코드는 두줄로 끝이 나는데, 어렵게 생각하면 계속 꼬이게 되고 시간만 낭비
