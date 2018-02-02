const fs = require('fs');

const fileContents = fs.readFileSync('./output.txt', 'utf8');

const passed = /(\d+)\spassing/.exec(fileContents);
const failed = /(\d+)\sfailing/.exec(fileContents);

console.log(passed ? passed[1] : 0);
console.log(failed ? failed[1] : 0);