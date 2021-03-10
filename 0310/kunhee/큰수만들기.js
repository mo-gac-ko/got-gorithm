//내가 생각한 아이디어 대로 답을 구하는 방법(속도 안나옴 실패 케이스 많음)
function solution(number, k) {
  var answer = "";

  let charArr = number.split("");

  const getCombinations = function (arr, selectNumber) {
    const results = [];

    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };

  const result = getCombinations(charArr, number.length - k)
    .map((i) => i.join(""))
    .sort();
  answer = result[result.length - 1];
  // console.log(result);

  return answer;
}

/**
 * 스택을 이용한 방법
 * 출처 및 풀이 - https://taesung1993.tistory.com/46
 * (문자열을 계속 더하고, 지워가면서 답을 구하는 방식은 javascript에서 속도 문제가
 * 생긴다 - 테스트케이스 10번)
 * 그래서 스택을 이용한 풀이방법을 사용하여 속도문제를 개선한듯
 */
function solution(number, k) {
  const stack = [];
  let answer = "";

  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }

    stack.push(el);
  }
  console.log(stack);

  stack.splice(stack.length - k, k);
  answer = stack.join("");
  return answer;
}
