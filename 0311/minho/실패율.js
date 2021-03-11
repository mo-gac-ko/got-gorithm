function solution(N, stages) {
  let answer = [];
  let player = stages.length; // 전체 도전자 수
  let rates = 0; // 스테이지 실패율
  let sortedRate = []; // 실패율 정렬
  let challengers = {}; // 스테이지 별 도전자 수

  stages.forEach((stage) => {
    if (stage > N) return;
    // 스테이지 올 클리어한 경우 해당 루프 종료
    else if (challengers[stage]) {
      challengers[stage]++;
    } else challengers[stage] = 1;
  });

  for (let i = 1; i <= N; i++) {
    // 해당 스테이지 도전자 수가 0명일 경우
    if (challengers[i] === undefined) {
      challengers[i] = 0;
    }
  }

  let temp = 0;
  for (let j = 1; j < N + 1; j++) {
    if (j === 1) {
      rates = challengers[j] / player;
      temp = player - challengers[j];
      challengers[j] = rates;
    } else {
      player = temp;
      rates = challengers[j] / player;
      temp = player - challengers[j];
      challengers[j] = rates;
    }
  }

  for (let stage in challengers) {
    // 스테이지와 해당 도전자 수를 하나의 배열로 저장
    sortedRate.push([stage, challengers[stage]]);
  }
  // 각 스테이지의 실패율을 올림차순으로 정렬
  sortedRate.sort((a, b) => b[1] - a[1]);

  sortedRate.forEach((stage) => {
    // 정렬된 실패율 배열에서 스테이지 번호를 result에 순서대로 저장
    answer.push(Number(stage[0]));
  });

  return answer;
}
