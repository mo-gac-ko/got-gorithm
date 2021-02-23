function solution(x) {
  var answer = true;
  let arr = [];

  arr = String(x).split("");

  let sumOfEachNum = 0;
  for (let item of arr) {
    sumOfEachNum += Number(item);
  }

  if (x % sumOfEachNum === 0) {
    answer = true;
  } else {
    answer = false;
  }

  console.log(sumOfEachNum);

  return answer;
}
