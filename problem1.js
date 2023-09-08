const fileCreateDeleteUsingCallback = require("./problem1/1-fcd-using-callback.js");
const fileCreateDeleteUsingPromise = require("./problem1/2-fcd-using-promise.js");
const fileCreateDeleteUsingAsyncAwait = require("./problem1/3-fcd-using-async-await.js");

function problem1() {
  fileCreateDeleteUsingCallback();
  fileCreateDeleteUsingPromise();
  fileCreateDeleteUsingAsyncAwait();
}
module.exports = problem1;
