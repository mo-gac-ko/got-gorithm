function solution(phone_number) {
  let answer = "";
  let numberLength = phone_number.length;
  let firstNumber = phone_number.substring(0, numberLength - 4);
  let lastNumber = phone_number.substring(numberLength - 4);
  let hiddenNumber = "";
  for (let i = 0; i < firstNumber.length; i++) {
    hiddenNumber += "*";
  }
  answer = hiddenNumber + lastNumber;
  return answer;
}
