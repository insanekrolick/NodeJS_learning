
let getString = function () {
  return process.argv[2];
}
const fs = require("fs");
const items = fs.readdirSync(getString());

for ( let i = 0; i <= items.length; i++){
  console.log(items[i]);
}

