function solution(s, n) {
  var answer = "";
  let charArr = s.split("");

  for (let items of charArr) {
    if (items !== " ") {
      if (items.charCodeAt(0) <= 90) {
        if (items.charCodeAt(0) + n >= 91) {
          answer += String.fromCharCode(items.charCodeAt(0) + n - 26);
        } else {
          answer += String.fromCharCode(items.charCodeAt(0) + n);
        }
      }
      if (items.charCodeAt(0) >= 97) {
        if (items.charCodeAt(0) + n >= 123) {
          answer += String.fromCharCode(items.charCodeAt(0) + n - 26);
        } else {
          answer += String.fromCharCode(items.charCodeAt(0) + n);
        }
      }
    } else {
      answer += " ";
    }
  }
  console.log(answer);

  return answer;
}
