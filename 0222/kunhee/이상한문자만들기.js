function solution(s) {
  var answer = "";

  let splitByWords = [];
  let changedChar = [];

  splitByWords = s.split(" ");

  for (let i = 0; i < splitByWords.length; i++) {
    let splitByChar = splitByWords[i].split("");
    for (let i2 = 0; i2 < splitByChar.length; i2++) {
      if (i2 === 0 || i2 % 2 === 0) {
        changedChar.push(splitByChar[i2].toUpperCase());
      } else {
        changedChar.push(splitByChar[i2].toLowerCase());
      }
    }
    if (i + 1 < splitByWords.length) {
      changedChar.push(" ");
    }
  }

  answer = "".concat(...changedChar);

  return answer;
}
