function solution(numbers, hand) {
  var answer = "";

  let CurrentLeft = {
    x: 0,
    y: 3,
  };
  let CurrentRight = {
    x: 2,
    y: 3,
  };

  for (let index = 0; index < numbers.length; index++) {
    //왼손일때
    if (numbers[index] === 1 || numbers[index] === 4 || numbers[index] === 7) {
      // console.log(getLocation(numbers[index]));
      CurrentLeft = getLocation(numbers[index]);
      answer += "L";
    }
    //오른손일때
    if (numbers[index] === 3 || numbers[index] === 6 || numbers[index] === 9) {
      // console.log(getLocation(numbers[index]));
      CurrentRight = getLocation(numbers[index]);
      answer += "R";
    }
    //가운데줄 누를때
    if (
      numbers[index] === 2 ||
      numbers[index] === 5 ||
      numbers[index] === 8 ||
      numbers[index] === 0
    ) {
      // console.log(getLocation(numbers[index]));
      // console.log(CurrentLeft);
      // console.log(CurrentRight);

      let willPushNumber = getLocation(numbers[index]);

      //왼손과 가운데 누를 패드와의 거리 재기
      let distanceLeftX = Math.abs(willPushNumber.x - CurrentLeft.x); //abs는 음수면 양수전환하는 메소드
      let distanceLeftY = Math.abs(willPushNumber.y - CurrentLeft.y); //abs는 음수면 양수전환하는 메소드

      //오른손과 가운데 누를 패드와의 거리 재기
      let distanceRightX = Math.abs(willPushNumber.x - CurrentRight.x); //abs는 음수면 양수전환하는 메소드
      let distanceRightY = Math.abs(willPushNumber.y - CurrentRight.y); //abs는 음수면 양수전환하는 메소드
      // console.log("왼손 :" + distanceLeftX + " , " + distanceLeftY);
      // console.log("오른손 : " + distanceRightX + " , " + distanceRightY);

      if (distanceLeftX + distanceLeftY > distanceRightX + distanceRightY) {
        //왼손 거리가 더 크면 오른손으로 눌러야함.
        answer += "R";
        CurrentRight = willPushNumber;
      } else if (
        distanceLeftX + distanceLeftY <
        distanceRightX + distanceRightY
      ) {
        //오른손 거리가 더 크면 왼손으로 눌러야함.
        answer += "L";
        CurrentLeft = willPushNumber;
      } else {
        //거리가 같다면?
        if (hand === "left") {
          //왼손잡이면 왼손으로 눌러야함
          answer += "L";
          CurrentLeft = willPushNumber;
        } else {
          answer += "R";
          CurrentRight = willPushNumber;
        }
      }
    }
  }

  return answer;
}

function getLocation(number) {
  let object = {};

  if (number === 0) {
    object.x = 1;
    object.y = 3;
    return object;
  } else {
    object.x = number % 3 === 0 ? 2 : (number % 3) - 1;
    object.y = Math.floor(number / 3.01);
  }

  return object;
}
