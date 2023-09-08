const fs = require("fs");

function makeDirectoryPromise(folderName, folderPath) {
  return new Promise((resolve, reject) => {
    const directoryPath = folderPath + folderName;
    fs.mkdir(directoryPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Directory created successfully!!!");
      }
    });
  });
}
module.exports = makeDirectoryPromise;
