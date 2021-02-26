process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  // console.log(a);
  // console.log(b);

  let string = "";

  for (let idx = 1; idx <= b; idx++) {
    for (let index = 1; index <= a; index++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
});
