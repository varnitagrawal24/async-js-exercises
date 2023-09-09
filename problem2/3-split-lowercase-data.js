const appendFilePromise = require("../fs-promise/append-file-promise");
const createFilePromise = require("../fs-promise/create-file-promise");

const splitLowercaseData = async (data) => {
  try {
    const lowercaseData = data.toLowerCase();

    const paraInData = lowercaseData.split("\n");

    let seprateFileIndex = 1;
    let splitFileName = [];

    for (let paraItem of paraInData) {
      const splitsInData = paraItem.split(". ");
      for (let splitItem of splitsInData) {
        if (splitItem !== "") {
          const fileName = `splitfile${seprateFileIndex}.txt`;

          const createFile = await createFilePromise(
            fileName,
            "../",
            splitItem
          );
          console.log(createFile);
          const appendData = await appendFilePromise(
            "../filenames.txt",
            fileName
          );
          console.log(appendData);
          seprateFileIndex++;
          splitFileName.push(fileName);
        }
      }
    }
    return splitFileName;
  } catch (error) {
    console.error(error);
  }
};
module.exports = splitLowercaseData;
