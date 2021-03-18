function solution(clothes) {
  let answer = 1;
  let options = {};

  // 옷의 종류별로 갯수 카운팅
  clothes.forEach((cloth) => {
    if (options[cloth[1]]) {
      // 객체에 키가 존재하면 + 1
      options[cloth[1]]++;
    } else {
      // 객체에 키가 존재하지 않는다면 해당 키의 값을 1로 설정
      options[cloth[1]] = 1;
    }
  });
  for (let key in count) {
    answer *= count[key] + 1;
  }
  return answer - 1;
}
