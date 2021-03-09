function solution(nums) {
  let halfLen = nums.length / 2;
  let pocketNum = Array.from(new Set(nums)).length;
  return pocketNum > halfLen ? halfLen : pocketNum;
}
