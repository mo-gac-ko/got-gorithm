function solution(n, words) {
  let answer = [];
  for (let i = 1; i < words.length; i++) {
    let current = words[i];
    let before = words[i - 1];
    // 이미 말한 단어이거나, 끝말잇기를 틀린 경우
    if (
      words.indexOf[current] !== current ||
      current[0] !== before[before.length - 1]
    ) {
      num = (i % n) + 1;
      order = parsInt(1 / n + 1);
      break;
    }
  }
  return answer[(num, order)];
}
