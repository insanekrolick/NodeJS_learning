
let getString = function () {
  return process.argv[2];
}

let testStr = "hello, " + getString();
console.log(testStr);