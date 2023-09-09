const fs = require("fs");

const appendFilePromise = (filePath, content) => {
  return new Promise((resolve, reject) => {
    content += "\n";
    fs.appendFile(filePath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("content add successfully!!!");
      }
    });
  });
};
module.exports = appendFilePromise;
