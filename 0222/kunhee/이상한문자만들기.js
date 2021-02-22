function solution(s) {
  var answer = "";

  let splitByWords = [];
  let changedChar = [];

  splitByWords = s.split(" ");

  splitByWords.forEach((items, index) => {
    let splitByChar = splitByWords[index].split("");
    splitByChar.forEach((item, idx) => {
      if (idx === 0 || idx % 2 === 0) {
        changedChar.push(item.toUpperCase());
      } else {
        changedChar.push(item.toLowerCase());
      }
    });
    changedChar.push(" ");
  });

  answer = "".concat(...changedChar).trim();

  return answer;
}
