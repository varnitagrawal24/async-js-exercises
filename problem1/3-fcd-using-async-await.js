const makeDirectoryPromise = require("../fs-promise/make-directory-promise");
const createFilePromise = require("../fs-promise/create-file-promise");
const deleteFilePromise = require("../fs-promise/delete-file-promise");

async function fileCreateDeleteUsingAsyncAwait() {
  //try-catch
  try {
    // Make Directory json-dir3
    const mkDir = await makeDirectoryPromise("json-dir3", "../");
    console.log(mkDir);
    // Create-Deleting File file1.json
    const createFile1 = await createFilePromise(
      "file1.json",
      "../json-dir3",
      {}
    );
    console.log(createFile1);
    const deleteFile1 = await deleteFilePromise("file1.json", "../json-dir3");
    console.log(deleteFile1);
    // Create-Deleting File file2.json
    const createFile2 = await createFilePromise(
      "file2.json",
      "../json-dir3",
      {}
    );
    console.log(createFile2);
    const deleteFile2 = await deleteFilePromise("file2.json", "../json-dir3");
    console.log(deleteFile2);
    // Create-Deleting File file3.json
    const createFile3 = await createFilePromise(
      "file3.json",
      "../json-dir3",
      {}
    );
    console.log(createFile3);
    const deleteFile3 = await deleteFilePromise("file3.json", "../json-dir3");
    console.log(deleteFile3);
  } catch (err) {
    //error
    console.error(err);
  }
}
module.exports = fileCreateDeleteUsingAsyncAwait;
