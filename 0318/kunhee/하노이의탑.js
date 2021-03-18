// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//1층인경우 1번 1
//2층인경우 3번 2^2 -1
//3층인경우 7번 2^3 -1
//7층인경우 127번 2^7 -1
//Math.pow(값, 제곱승) javascript 제곱값 구하는 api

rl.on("line", function (line) {
  console.log(Math.pow(2, line) - 1);
  rl.close();
}).on("close", function () {
  process.exit();
});
