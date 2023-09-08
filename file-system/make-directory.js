const fs = require("fs");

function makeDirectory(folderName, folderPath, cb) {
  const directoryPath = folderPath + folderName;
  fs.mkdir(directoryPath, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Directory created successfully!!!");
      cb();
    }
  });
}
module.exports = makeDirectory;
