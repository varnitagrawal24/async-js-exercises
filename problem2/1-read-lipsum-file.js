const readFilePromise = require('../fs-promise/read-file-promise')

const readlipsumFile = async ()=>{
    const data=await readFilePromise('../lipsum.txt');
    console.log(data);
}

module.exports=readlipsumFile