
//let getString = function () {
 // return process.argv[2];
//}
const fs = require("fs");


$scope.explorer=[];
$scope.openFile = function(){
  $scope.explorer = [tree_entry($scope.path)];
  get_folder($scope.path, $scope.explorer[0].children);
};

function get_folder(path, tree){
  fs.readdir(path, function(err,files){
    if (err) return console.log(err);

    files.forEach( function (file,idx){
      tree.push(tree_entry(file));
      fs.lstat(path+'/'+file,function(err,stats){
        if(err) return console.log(err);
        if(stats.isDirectory()){
          get_folder(path+'/'+file,tree[idx].children);
        }
      });
    });
  });
  console.log($scope.explorer);

  return;
}

function tree_entry(entry){
  return { label : entry, children: []}
}

//function scaner(y,counter = 1){
//  let y1 = fs.readdirSync(y);
//  for(let x of y1){
//    let stat = fs.statSync(y + x);
//    if(!stat.isFile()){
//      let path = y + x + '/';
//      console.log(`${counter}` + x);
//      scaner(path,++counter);
//    }
//  }
//}
//scaner(getString());

//function findFiles(folderName) {
 // const items = fs.readdirSync(folderName, { withFileTypes: true });
//  items.forEach((item) => {
 //   if (item.isDirectory()) {
 //     console.log( `in folder: ${folderName} `);
 //     findFiles(`${folderName}/${item.name}`);
 //   } else {
 //     console.log(`Found file: ${item.name} `);
 //   }
 // });
//}

//findFiles(getString());







