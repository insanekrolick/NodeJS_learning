
let getString = function () {
  return process.argv[2];
}
const fs = require("fs");

function findFiles(folderName) {
  const items = fs.readdirSync(folderName, { withFileTypes: true });
  items.forEach((item) => {
    if (item.isDirectory()) {
       findFiles(`${folderName}/${item.name}`);
    } else {
      console.log(`folder: ${folderName} File: ${item.name} `);
    }
  });
}

findFiles(getString());

//const items = fs.readdirSync(getString(), { withFileTypes: true });
//for (let item of items) {
  //const type = item.isDirectory() ? "folder" : "file";
  //console.log(`${item.name}: ${type}`);

//}



