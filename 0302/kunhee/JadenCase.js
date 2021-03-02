function solution(s) {
  return s
    .split(" ")
    .map((item) =>
      item.split("").map((item, i) => {
        if (i === 0) {
          item = item.toUpperCase();
        } else {
          item = item.toLowerCase();
        }
        return item;
      })
    )
    .map((item) => item.join(""))
    .join(" ");
}
//한줄로 실행하기 성공
