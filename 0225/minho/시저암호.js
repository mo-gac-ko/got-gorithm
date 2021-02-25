function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const charToAscii = s.charCodeAt(i);
    if (charToAscii === 32) {
      // 공백일 경우
      // answer += " ";
      console.log(" ");
    }
    if (charToAscii >= 97 && charToAscii <= 122) {
      // 소문자일 경우
      const char = String.fromCharCode(charToAscii + n);
      console.log(char);
    }
    if (charToAscii >= 65 && charToAscii <= 90) {
      // 대문자일 경우
      const pushedAscii = charToAscii + n > 90 ? charToAscii - 26 : charToAscii;
      console.log("pushedAscii: " + pushedAscii);
    }
  }
  return answer;
}
