function solution(s) {
  var answer = "";
  return s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((i, index) => (index === 0 ? i.toUpperCase() : i.toLowerCase()))
        .join("");
    })
    .join(" ");
}
