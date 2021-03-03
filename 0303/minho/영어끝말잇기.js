function solution(n, words) {
  let answer = [];
  let usedWord = []; // 사용된 단어

  usedWord.push(words[0]); // 제일 첫 번째 단어를 배열에 푸시

  for (let i = 1; i < words.length; i++) {
    const previousWord = words[i - 1];
    const currentWord = words[i];
    if (previousWord[previousWord.length - 1] === currentWord[0] && usedWord.indexOf(currentWord) === -1) {
      usedWord.push(currentWord);
    } else break;

    if (usedWord.length === words.length) {
      return [0, 0];
    } else {
      const player = ((usedWord.length - 1) % n) + 1;
      console.log(player);
      const turn = 0;
    }
  }
  return answer;
}
