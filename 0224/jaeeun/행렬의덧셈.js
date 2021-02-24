function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((ele, j) => ele + arr2[i][j]));
}
