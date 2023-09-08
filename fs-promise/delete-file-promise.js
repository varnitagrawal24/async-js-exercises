const fs = require("fs");

function deleteFilePromise(fileName, filePath) {
  return new Promise((resolve, reject) => {
    const path = filePath + "/" + fileName;

    fs.unlink(path, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(fileName + " deleted successfully!!!");
      }
    });
  });
}
module.exports = deleteFilePromise;
