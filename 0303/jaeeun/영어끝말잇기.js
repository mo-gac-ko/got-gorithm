function solution(n, words) {
  var answer = [0, 0];
  let mentioned = [];

  for (let i; i < words.length; i++) {
    let current = words[i];
    let before = words[i - 1];
    if (
      mentioned.indexOf[current] === -1 &&
      current[0] == before[before.legnth - 1]
    ) {
      mentioned.push(current);
    } else {
      // 다못품
    }
  }
  return answer;
}
