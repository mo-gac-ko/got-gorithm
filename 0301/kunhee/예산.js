function solution(d, budget) {
  var answer = 0;
  let sortedD = d.sort((a, b) => a - b);

  let idx = 0;
  sortedD.reduce((acc, crr) => {
    if (acc + crr <= budget) {
      idx++;
    }
    return acc + crr;
  });

  answer = idx + 1;
  if (sortedD[0] > budget) {
    answer = 0;
  }
  console.log(answer);

  return answer;
}
