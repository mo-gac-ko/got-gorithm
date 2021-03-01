function solution(n, m) {
  var answer = [];
  var minNum = Math.min(n, m);
  var maxNum = Math.max(n, m);
  answer[0] = gcd(minNum, maxNum);
  answer[1] = lcm(minNum, maxNum);
  return answer;
}
/**
 * 최대 공약수
 *
 * @param {*} minNum
 * @param {*} maxNum
 * @return {*}
 */
function gcd(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
/**
 * 최소 공배수
 *
 * @param {*} minNum
 * @param {*} maxNum
 * @return {*}
 */
function lcm(minNum, maxNum) {
  return (minNum * maxNum) / gcd(minNum, maxNum);
}
