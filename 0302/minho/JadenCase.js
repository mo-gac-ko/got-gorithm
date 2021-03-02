function solution(s) {
  let answer = "";
  let temp = [];
  let upperTemp = "";
  let lowerTemp = "";

  const seperatedWord = s.toLowerCase().split(" ");
  for (let i = 0; i < seperatedWord.length; i++) {
    if (typeof seperatedWord[i][0] === "string") {
      const upperChar = seperatedWord[i][0].toUpperCase();
      temp.push(upperChar);
    } else {
      const upperChar = seperatedWord[i][0];
      temp.push(upperChar);
    }

    for (let j = 1; j < seperatedWord[i].length; j++) {
      const currentChar = seperatedWord[i][j];
      lowerTemp += currentChar;
    }
    console.log(temp);
    console.log(lowerTemp);
  }

  return answer;
}
