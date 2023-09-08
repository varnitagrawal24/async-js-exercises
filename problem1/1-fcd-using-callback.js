const makeDirectory = require("../file-system/make-directory.js");
const createFile = require("../file-system/create-file.js");
const deleteFile = require("../file-system/delete.file.js");

function fileCreateDeleteUsingCallback() {
  // Make Directory json-dir1
  makeDirectory("json-dir1", "../", () => {
    createFile("file1.json", "../json-dir1", {}, () => {
      //Create File file1.json
      createFile("file2.json", "../json-dir1", {}, () => {
        //Create File file2.json
        createFile("file3.json", "../json-dir1", {}, () => {
          //Create File file3.json
          deleteFile("file3.json", "../json-dir1"); //Delete File file1.json
        });
        deleteFile("file2.json", "../json-dir1"); //Delete File file2.json
      });
      deleteFile("file1.json", "../json-dir1"); //Delete File file3.json
    });
  });
}
module.exports = fileCreateDeleteUsingCallback;
