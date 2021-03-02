function solution(s) {
  let answer = "";
  answer = s
    .toLowerCase()
    .split(" ")
    .map((word) => {
      const chars = word
        .split("")
        .map((char, idx) => {
          if (idx === 0 || idx % 2 === 0) return char.toUpperCase();
          else return char;
        })
        .join("");
      return chars;
    })
    .join(" ");
  return answer;
}
