function solution(n, arr1, arr2) {
  let answer = [];

  const toBinaryArr1 = arr1.map((idx) => {
    const binaryNum = idx.toString(2);
    return binaryNum.length < n ? "0".repeat(n - binaryNum.length) + binaryNum : binaryNum;
  });

  const toBinaryArr2 = arr2.map((idx) => {
    const binaryNum = idx.toString(2);
    return binaryNum.length < n ? "0".repeat(n - binaryNum.length) + binaryNum : binaryNum;
  });

  for (let i = 0; i < n; i++) {
    let code = "";
    for (let j = 0; j < n; j++) {
      toBinaryArr1[i][j] === "1" || toBinaryArr2[i][j] === "1" ? (code += "#") : (code += " ");
    }
    answer.push(code);
  }
  return answer;
}
