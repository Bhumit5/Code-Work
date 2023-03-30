const fs = require("fs");
let text = fs.readFileSync("info.txt", "utf-8");
const { waitForDebugger } = require("inspector");
text = text.replace("back", "front");
console.log(text);

console.log("----------------------\nCreating new file...");
fs.writeFileSync("info1.txt", text);
console.log("File is ceated!")
let text1 = fs.readFileSync("info1.txt", "utf-8")
console.log("----------------------\n" + text1)