const readFilePromise = require("../fs-promise/read-file-promise");

const readlipsumFile = async () => {
  try {
    const data = await readFilePromise("../lipsum.txt");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = readlipsumFile;
