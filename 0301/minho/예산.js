// 2, 6, 18, 19 실패

function solution(d, budget) {
  let answer = 0;
  let temp = [];

  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    temp.push(d[i]);
    const sum = temp.reduce((acc, cv) => acc + cv);
    if (sum === budget) {
      return temp.length;
    } else if (sum > budget) {
      return temp.length - 1;
    }
  }
}
