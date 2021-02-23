// s = "try hello world" 일 때,
function solution(s) {
  let words = s.split(" "); // ["try", "hello", "world"]
  return words
    .map(
      (str) =>
        str
          .split("") // 한 글자씩 나누고 다시 map함수로 문자 하나하나 순회하면서 대소문자 바꾸기
          .map((item, index) => {
            if (index % 2 == 0) return item.toUpperCase();
            return item.toLowerCase();
          })
          .join("") // 대소문자 변환해준 베열을 합침 ["TrY", "HeLlO", "WoRlD"]
    )
    .join(" "); // 공백 포함해서 하나의 문자열로 변환 "TrY HeLlO WoRlD"
}
