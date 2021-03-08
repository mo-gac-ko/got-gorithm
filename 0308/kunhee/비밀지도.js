function solution(n, arr1, arr2) {
  var answer = [];

  let changedArr1 = arr1
    .map((i) => i.toString(2))
    .map((i) => {
      if (i.length < n) {
        for (let index = 0; i.length < n; index++) {
          i = "0" + i;
        }
      }
      return i;
    });
  // console.log("arr1 : " + changedArr1);

  let changedArr2 = arr2
    .map((i) => i.toString(2))
    .map((i) => {
      if (i.length < n) {
        for (let index = 0; i.length < n; index++) {
          i = "0" + i;
        }
      }
      return i;
    });
  // console.log("arr2 : " + changedArr2);

  for (let index = 0; index < n; index++) {
    let tmpAnswer = "";
    changedArr1[index].split("").map((item, index2) => {
      if (changedArr2[index].split("")[index2] === "1" || item === "1") {
        tmpAnswer += "#";
      } else {
        tmpAnswer += " ";
      }
    });
    answer.push(tmpAnswer);
  }

  return answer;
}
