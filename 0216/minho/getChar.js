function solution(s) {
  let answer = "";
  const wordLength = s.length;
  if (wordLength % 2 === 1) {
    // 단어의 길이가 홀수 일 경우
    const midIndex = Math.floor(wordLength / 2); // 전체 길이를 나눠서 내림하면 중간 인덱스를 구할 수 있음..
    answer = s[midIndex];
  } else {
    // 단어의 길이가 짝수 일 경우
    answer = s.substring(1, s.length - 1);
  }
  return answer;
}
