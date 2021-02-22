function solution(s) {
  let answer = [];
  let stringArray = s.split(" ");
  stringArray.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
      if (i % 2 === 0) {
        answer.push(item[i].toUpperCase());
      } else {
        answer.push(item[i]);
      }
    }
  });
  return answer;
}
