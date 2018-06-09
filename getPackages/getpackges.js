const fs = require('fs');
const ncp = require("copy-paste");


const walkSync = function (dir, filelist) {
  if (dir[dir.length - 1] !== '/') dir = dir.concat('/');
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function (file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(dir + file);
    }
  });
  return filelist;
};

const test = walkSync("..");

const packageLocations = test.filter(location => location.endsWith(".packages"));

const packageContents = packageLocations.map(packageLocation => {
  return fs.readFileSync(packageLocation, "utf8").split(/[\r\n]+/);
}).reduce((acc, val) => acc.concat(val), []).sort().filter(function(item, pos, self) {
  return self.indexOf(item) === pos;
});


console.log("\n\nPACKAGES FOUND\n--------------\n");
console.log(packageContents.join("\n"));

console.log("\n\nCopied list of packages to clipboard. Up to you to determine conflicts.\n\n");

ncp.copy(packageContents.join(" "));