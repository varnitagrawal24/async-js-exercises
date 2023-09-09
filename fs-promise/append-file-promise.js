const fs = require("fs");

const appendFilePromise = (filePath, content) => {
  return new Promise((resolve, reject) => {
    content = "\n" + content;
    fs.appendFile(filePath, content, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
module.exports = appendFilePromise;
