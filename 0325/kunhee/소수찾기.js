function solution(n) {
  var answer = 0;

  for (let index = 2; index <= n; index++) {
    for (let index2 = 2; index2 <= index; index2++) {
      if (index % index2 === 0) {
        if (index2 !== index) {
          break;
        }
        answer++;
      }
    }
  }
  return answer;
  //내풀이 - 시간 초과로 실패 뜬다. 시간복잡도를 더 생각해야함
}

//찾아보니 에라토스테네스의 체 라는 것을 이해해야 하는 수학적 문제이다.
//소수를 구하기보다는 소수가 아닌 것을 제외하면 되고 그건 소수들의 배수를 제거 하면 된다.
// **연산자는 거듭제곱
function solution(n) {
  const s = new Set();
  //짝수는 소수 일수가 없음
  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }
  s.add(2);

  for (let j = 3; j ** 2 < n; j++) {
    if (s.has(j)) {
      for (let k = j ** 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
