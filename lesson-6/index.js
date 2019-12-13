const fs = require("fs"); // Do not worry for .require now, we will look on it on next lesson.
const util = require("util");
const readFile = util.promisify(fs.readFile);

// async/await is special keywords to work with async operations results
// async/await is still based on Promises
// Lets see how we can work with async operations using async/await

async function doSomeAsyncThing() {
  console.log("Reading file async 1.json");
  let promise = readFile("./data/1.json", { encoding: "UTF8" });
  let content = await promise;
  content = await promise;
  content = await promise;
  content = await promise;
  console.log("File content type", typeof content); // text
  console.log("File content is", content); // {"hello": "world!"}
  return content;
}
doSomeAsyncThing();