function solution(arr1, arr2) {
  return arr1.map((arr3, i) => arr3.map((ele, j) => ele + arr2[i][j]));
}
