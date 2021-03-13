function solution(brown, yellow) {
  var answer = [];

  let tmpAllBoxes = brown + yellow;

  let arr = [];
  for (var i = 2; i < tmpAllBoxes; i++) {
    if (tmpAllBoxes % i == 0) {
      arr.push(i);
    }
  }

  arr.map((item, index) => {
    if (item * item === tmpAllBoxes) {
      answer.push(item, item);
    }
  });

  if (answer.length !== 0) {
    return answer;
  }

  arr.map((item, index) => {
    if (index + 1 <= arr.length) {
      if (item * arr[index + 1] === tmpAllBoxes) {
        if ((arr[index + 1] - 2) * (item - 2) === yellow) {
          answer.push(arr[index + 1], item);
        }
      }
    }
  });
  if (answer.length !== 0) {
    return answer;
  } else {
    answer.push(yellow + 2, 3);
  }
  console.log(answer);

  return answer;
}

function solution(brown, yellow) {
  const answer = [];
  const rc_sum = Math.floor(brown / 2) + 2;
  const rc_mul = brown + yellow;
  for (let r = Math.floor(rc_mul / 2); r >= 3; --r) {
    const c = Math.floor(rc_mul / r);
    if (rc_mul % r == 0 && r + c == rc_sum) {
      answer[0] = r;
      answer[1] = c;
      break;
    }
  }
  return answer;
}
