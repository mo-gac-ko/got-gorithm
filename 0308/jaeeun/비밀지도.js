function solution(n, arr1, arr2) {
  var answer = [];
  let convert1 = arr1
    .map((num) => num.toString(2))
    .map((num) => {
      return num.length === n ? num : "0" * (n - num.length) + num;
    });
  let convert2 = arr2
    .map((num) => num.toString(2))
    .map((num) => {
      return num.length === n ? num : "0" * (n - num.length) + num;
    });
  // console.log(convert1);
  // console.log(convert2);

  return answer;
}
