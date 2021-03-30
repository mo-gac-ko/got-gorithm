function solution(numbers, hand) {
  let answer = "";
  let leftThumb = "*"; // 왼엄지 시작 위치
  let rightThumb = "#"; // 오른엄지 시작 위치

  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  numbers.forEach((num) => {
    if (num % 3 === 1) {
      // 1,4,7
      answer += "L";
      leftThumb = num;
    } else if (num % 3 === 0 || num !== 0) {
      // 3,6,9
      answer += "R";
      rightThumb = num;
    } else {
      // 2,5,8,0
      leftPosition = keyPad[leftThumb];
      rightPosition = keyPad[rightThumb];
      console.log(leftPosition, rightPosition);
    }
  });

  return answer;
}
