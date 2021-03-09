function solution(nums) {
  var answer = 0;
  let kindOfNums = [];
  let halfOfNums = nums.length / 2;

  nums.map((item) => {
    if (!kindOfNums.includes(item)) {
      kindOfNums.push(item);
    }
  });
  // console.log(kindOfNums)

  answer = kindOfNums.length < halfOfNums ? kindOfNums.length : halfOfNums;
  return answer;
}
