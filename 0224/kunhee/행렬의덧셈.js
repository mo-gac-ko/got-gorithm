function solution(arr1, arr2) {
  var answer = [];
  let test = [];

  for (let index = 0; index < arr1.length; index++) {
    for (let index2 in arr1[index]) {
      test.push(Number(arr1[index][index2]) + Number(arr2[index][index2]));
    }
    answer.push(test);
    test = [];
  }
  console.log(answer);

  return answer;
}
