function solution(s) {
  var answer = "";
  answer = s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((i, index) => (index === 0 ? i.toUpperCase() : i.toLowerCase()))
        .join("");
    })
    .join(" ");
  return answer;
}
