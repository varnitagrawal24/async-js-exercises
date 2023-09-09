const readlipsumFile = require("./problem2/1-read-lipsum-file");
const lipsumToUppercase = require("./problem2/2-lipsum-to-uppercase");
const splitLowercaseData = require("./problem2/3-split-lowercase-data");
const sortSplitFileAndCombine = require("./problem2/4-sort-split-file");
const deleteFileInFilenames = require("./problem2/5-delete-file-in-filenames");

async function problem2() {
  try {
    const data = await readlipsumFile();
    const uppercaseData = await lipsumToUppercase(data);
    const splitFilename = await splitLowercaseData(uppercaseData);
    await sortSplitFileAndCombine(splitFilename);
    await deleteFileInFilenames();
  } catch (error) {
    console.error(error);
  }
}
module.exports = problem2;
