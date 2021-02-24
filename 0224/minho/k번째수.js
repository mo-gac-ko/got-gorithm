function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    // slice : 기존 배열에 영향을 주지 않고 새로운 배열로 반환
    const slicedArr = array.slice(commands[i][0] - 1, commands[i][1]);
    // 정렬 알고리즘
    const sortedArr = slicedArr.sort((a, b) => a - b);
    const pickedNum = sortedArr[commands[i][2] - 1];
    answer.push(pickedNum);
  }
  return answer;
}
