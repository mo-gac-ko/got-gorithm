function solution(nums) {
  let newNums = [];

  nums.forEach((item) => {
    if (newNums.indexOf(item) === -1) {
      newNums.push(item);
    }
  });

  const maxValue = nums.length / 2; // 한번에 선택할 수 있는 최대 마리 수
  let pickedValue = newNums.length; // 한번에 선택할 수 있는 최대 종류

  return pickedValue >= maxValue ? maxValue : pickedValue;
}
