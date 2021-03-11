function solution(N, stages) {
  //n은 전체 스테이지의 개수
  //stages는 사용자들이 현재 멈춰있는 스테이지번호

  //실패율 => 스테이지 도달했으나 아직 클리어 못한 사람 수/ 스테이지에 도달한 플레이어 수

  stages.sort();

  let failureRateArr = [];

  var answer = [];

  for (let index = 0; index < stages.length; index++) {
    for (let index2 = 0; index2 < failureRateArr.length; index2++) {
      if (stages[index] - 1 === index2) {
        failureRateArr[stages[index] - 1] !== undefined
          ? (failureRateArr[stages[index] - 1] += 1)
          : (failureRateArr[stages[index] - 1] = 1);
      }
    }
  }

  console.log(failureRateArr);
  return answer;
}
