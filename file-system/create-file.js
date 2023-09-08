const fs = require("fs");

function createFile(fileName, filePath, jsonData, cb) {
  const path = filePath + "/" + fileName;
  const data = JSON.stringify(jsonData);

  fs.writeFile(path, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(fileName + " created successfully!!!");
      if (cb) {
        cb();
      }
    }
  });
}
module.exports = createFile;
