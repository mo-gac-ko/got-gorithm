function solution(N, stages) {
  let answer = [];
  let player = stages.length; // 전체 플레이어 수
  let rate = 0; // 스테이지 별 실패율
  let sortedRate = []; // 실패율 정렬
  let challenger = {}; // 스테이지 별 도전자 수

  // 해당 스테이지별 도전자 수 구하기
  stages.forEach((stage) => {
    // if (stage > N) return;
    if (challenger[stage]) {
      challenger[stage]++;
    } else challenger[stage] = 1;
  });

  // 해당 스테이지 도전자 수가 0명일 경우
  for (let i = 1; i <= N; i++) {
    if (challenger[i] === undefined) {
      challenger[i] = 0;
    }
  }
  console.log(challenger);

  return answer;
}
