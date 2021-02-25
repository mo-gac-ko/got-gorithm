function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const charToAscii = s.charCodeAt(i);
    if (charToAscii === 32) {
      // 공백일 경우
      answer += " ";
    }
    if (charToAscii >= 97 && charToAscii <= 122) {
      // 소문자일 경우
      const pushedAscii = charToAscii + n > 122 ? charToAscii + n - 26 : charToAscii + n;
      answer += String.fromCharCode(pushedAscii);
    }
    if (charToAscii >= 65 && charToAscii <= 90) {
      // 대문자일 경우
      const pushedAscii = charToAscii + n > 90 ? charToAscii + n - 26 : charToAscii + n;
      answer += String.fromCharCode(pushedAscii);
    }
  }
  return answer;
}
