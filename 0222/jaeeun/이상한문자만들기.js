// 못 풀었음...

function solution(s) {
  var answer = "";
  let words = s.split(" ");
  answer = words.map((str) =>
    str.split("").map((item, index) => {
      //여기서 꼬인듯
      if (index % 2 == 0) {
        return item.toUpperCase();
      } else {
        return item.toLowerCase();
      }
    })
  );
  console.log(answer);
  return answer;
}
