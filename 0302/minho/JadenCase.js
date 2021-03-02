// 43.8
// 2, 4, 5, 8, 9, 11, 12, 13, 14 런타임 에러

function solution(s) {
  let answer = "";
  let temp = [];

  const words = s.toLowerCase().split(" ");
  words.forEach((word) => {
    // 첫번째 문자열이 공백인 경우 어떻게 처리할 것인가ㅏㅏㅏㅏㅏㅏ.,....

    let joinWord = "";
    let lowerChar = "";
    if (word[0] === " ") {
      const capitalChar = word[0];
      for (let i = 1; i < word.length; i++) {
        lowerChar += word[i];
      }
      joinWord = capitalChar + lowerChar;
      temp.push(joinWord);
    } else {
      const capitalChar = word[0].toUpperCase();
      for (let i = 1; i < word.length; i++) {
        lowerChar += word[i];
      }
      joinWord = capitalChar + lowerChar;
      temp.push(joinWord);
    }
  });
  answer = temp.join(" ");
  return answer;
}
