const makeDirectoryPromise = require("../fs-promise/make-directory-promise");
const createFilePromise = require("../fs-promise/create-file-promise");
const deleteFilePromise = require("../fs-promise/delete-file-promise");

function fileCreateDeleteUsingPromise() {
  // Make Directory json-dir2
  makeDirectoryPromise("json-dir2", "../")
    .then((value) => {
      console.log(value);
      createFilePromise("file1.json", "../json-dir2", {}) //Create File file1.json
        .then((value) => {
          console.log(value);
          createFilePromise("file2.json", "../json-dir2", {}) //Create File file2.json
            .then((value) => {
              console.log(value);
              createFilePromise("file3.json", "../json-dir2", {}) //Create File file3.json
                .then((value) => {
                  console.log(value);
                  deleteFilePromise("file3.json", "../json-dir2") //Delete File file3.json
                    .then((value) => {
                      console.log(value);
                    })
                    .catch((err) => {
                      console.error(err);
                    });
                })
                .catch((err) => {
                  console.error(err);
                });
              deleteFilePromise("file2.json", "../json-dir2") //Delete File file2.json
                .then((value) => {
                  console.log(value);
                })
                .catch((err) => {
                  console.error(err);
                });
            })
            .catch((err) => {
              console.error(err);
            });
          deleteFilePromise("file1.json", "../json-dir2") //Delete File file1.json
            .then((value) => {
              console.log(value);
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
}
module.exports = fileCreateDeleteUsingPromise;
