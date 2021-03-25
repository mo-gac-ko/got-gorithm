function solution(clothes) {
  var answer = 1;
  let count = {};

  for (let item in clothes) {
    count[item[1]]= (obj[arr[1]] || 0) + 1;
  }
  // clothes.map((item) => {
  //   if (item[1] in count) {
  //     count[item[1]] += 1;
  //   } else count[item[1]] = 1;
  // });
  for (let i in count) {
    answer *= count[i] + 1;
  }
  return answer - 1;
}
