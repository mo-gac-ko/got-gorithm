function solution(N, stages) {
  let result = [];

  //해당 스테이지별 도전,실패 플레이어 수 계산
  for (let i = 0; i < N; i++) {
    //해당 스테이지에 도전한 인원
    let trial = stages.filter((current) => current >= i + 1).length;

    // 실패한 인원
    let failed = stages.filter((current) => current === i + 1).length;

    //console.log("trial",trial);
    // console.log("fail",failed):

    // 객체에 저장 stage: 스테이지 번호, rate: 실패율= 실패인원/도전인원
    result.push({ stage: i + 1, rate: trial ? failed / trial : 0 });
  }
  // console.log(result);

  let answer = result.sort((a, b) =>
    a.rate == b.rate ? a.stage - b.stage : b.rate - a.rate
  );
  return answer.map((i) => i.stage);
}
