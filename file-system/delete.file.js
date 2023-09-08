const fs = require("fs");

function deleteFile(fileName, filePath) {
  const path = filePath + "/" + fileName;

  fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(fileName + " deleted successfully!!!");
    }
  });
}
module.exports = deleteFile;
