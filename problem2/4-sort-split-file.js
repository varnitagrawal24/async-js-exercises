const appendFilePromise = require("../fs-promise/append-file-promise");
const createFilePromise = require("../fs-promise/create-file-promise");
const readFilePromise = require("../fs-promise/read-file-promise");

const sortSplitFileAndCombine = async (slipFileNames) => {
  try {
    const creatFile = await createFilePromise("sorted.txt", "..", "");
    console.log(creatFile);
    const appendData = await appendFilePromise(
      "../filenames.txt",
      "sorted.txt"
    );
    console.log(appendData);
    for (let splitFileName of slipFileNames) {
      const sentence = await readFilePromise(`../${splitFileName}`);
      const sortedSentence = sentence.split(" ").sort().join(" ");
      const appendSentence = await appendFilePromise(
        "../sorted.txt",
        sortedSentence
      );
      console.log(appendSentence);
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports = sortSplitFileAndCombine;
