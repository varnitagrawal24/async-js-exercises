const createFilePromise = require("../fs-promise/create-file-promise");
const appendFilePromise = require("../fs-promise/append-file-promise");

const lipsumToUppercase = async (data) => {
  try {
    const uppercaseData = data.toUpperCase();
    const createFile = await createFilePromise(
      "uppercase.txt",
      "../",
      uppercaseData
    );
    console.log(createFile);
    const appendData = await appendFilePromise(
      "../filenames.txt",
      "uppercase.txt"
    );
    console.log(appendData);
    return uppercaseData;
  } catch (error) {
    console.error(error);
  }
};

module.exports = lipsumToUppercase;
