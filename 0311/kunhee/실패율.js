function solution(N, stages) {
  //n은 전체 스테이지의 개수
  //stages는 사용자들이 현재 멈춰있는 스테이지번호

  //실패율 => 스테이지 도달했으나 아직 클리어 못한 사람 수/ 스테이지에 도달한 플레이어 수

  stages.sort();

  let failureRateArr = [];
  for (let index = 0; index < N + 1; index++) {
    failureRateArr.push({
      stage: index + 1,
      unClearedUserCnt: 0,
      clearedUserCnt: 0,
      failRate: 0,
    });
  }

  var answer = [];

  for (let index = 0; index < stages.length; index++) {
    failureRateArr.filter((item) => {
      item.stage === stages[index] && item.unClearedUserCnt++;
    });
  }

  let tmpAddCnt = 0;
  for (let index = failureRateArr.length - 1; index >= 0; index--) {
    failureRateArr[index].clearedUserCnt = tmpAddCnt;
    tmpAddCnt += failureRateArr[index].unClearedUserCnt;
    failureRateArr[index].failRate =
      failureRateArr[index].unClearedUserCnt /
      (failureRateArr[index].clearedUserCnt +
        failureRateArr[index].unClearedUserCnt);
  }
  // console.log(failureRateArr);

  failureRateArr = failureRateArr.filter((item) => {
    return item.stage <= N && item;
  });
  failureRateArr.sort((a, b) => {
    return b.failRate - a.failRate;
  });
  failureRateArr.map((item) => answer.push(item.stage));

  // console.log(failureRateArr);
  return answer;
}
