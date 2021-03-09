function solution(nums) {
  let answer = 0;
  let newNums = [];
  let i = 0;

  do {
    if (newNums.indexOf(nums[i]) === -1) {
      newNums.push(nums[i]);
    }
    i++;
  } while (i < nums.length);

  const maxValue = nums.length / 2; // 한번에 선택할 수 있는 최대 마리 수
  let pickedValue = newNums.length; // 한번에 선택할 수 있는 최대 종류 수

  pickedValue >= maxValue ? (answer = maxValue) : (answer = pickedValue);
  return answer;
}
