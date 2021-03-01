function solution(numbers) {
  var answer = "";
  let tmp = [];
  numbers.map((item, idx) => {
    tmp.push([idx, item.toString().split("")[0]]);
  });
  console.log(tmp);
  return answer;
}
