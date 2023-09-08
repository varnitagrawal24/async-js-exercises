const fs = require("fs");

function createFilePromise(fileName, filePath, jsonData) {
  return new Promise((resolve, reject) => {
    const path = filePath + "/" + fileName;
    const data = JSON.stringify(jsonData);

    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(fileName + " created successfully!!!");
      }
    });
  });
}
module.exports = createFilePromise;
