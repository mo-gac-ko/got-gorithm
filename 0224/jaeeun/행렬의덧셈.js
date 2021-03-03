function solution(arr1, arr2) {
  return arr1.map((
    a,
    i // a: [1,2],[2,3]  i :0,1
  ) => a.map((ele, j) => ele + arr2[i][j])); // ele : 1,2,3,4   j=0,1

  //  1 + arr2[0][0] = 1+3 = 4
  //  2 + arr2[0][1] = 1+2 = 3
}
