function solution(n, arr1, arr2) {
  var answer = [];
  let convert1 = arr1
    .map((num) => num.toString(2))
    .map((num) => {
      return num.length < n ? "0".repeat(n - num.length) + num : num;
    });
  let convert2 = arr2
    .map((num) => num.toString(2))
    .map((num) => {
      return num.length < n ? "0".repeat(n - num.length) + num : num;
    });

  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
      if (convert1[i][j] === "1" || convert2[i][j] === "1") result += "#";
      else result += " ";
    }
    answer.push(result);
  }

  return answer;
}
