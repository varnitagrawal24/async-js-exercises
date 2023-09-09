const deleteFilePromise = require("../fs-promise/delete-file-promise");
const readFilePromise = require("../fs-promise/read-file-promise");

const deleteFileInFilenames = async () => {
  try {
    const readFilenames = await readFilePromise("../filenames.txt");
    const fileNamesArray = readFilenames.split("\n");
    fileNamesArray.map(async (fileName) => {
      if (fileName != "") {
        const deleteFile = await deleteFilePromise(fileName, "..");
        console.log(deleteFile);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteFileInFilenames;
