function solution(n, arr1, arr2) {
  let answer = [];

  const toBinaryArr1 = arr1.map((idx) => {
    const binaryNum = idx.toString(2);
    binaryNum.length < n ? "0".repeat(n - binaryNum.length) + binaryNum : binaryNum;
  });

  const toBinaryArr2 = arr2.map((idx) => {
    const binaryNum = idx.toString(2);
    binaryNum.length < n ? "0".repeat(n - binaryNum.length) + binaryNum : binaryNum;
  });

  return answer;
}
