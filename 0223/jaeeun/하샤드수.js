function solution(x) {
  let answer = true;
  let nums = String(x).split("");
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Number(nums[i]);
  }
  if (x % sum !== 0) {
    answer = false;
  }
  return answer;
}
