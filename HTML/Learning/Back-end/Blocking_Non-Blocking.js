// ---------- Synchronous / Blocking
// - line by line execution

const fs = require("fs");
let text1 = fs.readFileSync("info.txt", "utf-8", (err, data) => {
    console.log(err, data);
});

console.log("This is sample message")





// ---------- Asynchronous / Non-Blocking
// - line by line execution not guaranteed
// - callbacks will fire

let text = fs.readFile("info.txt", "utf-8", (err, data) => {
    console.log(err, data);
});

console.log("This is sample message")