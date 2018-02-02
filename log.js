const fs = require('fs');

const fileContents = fs.readFileSync('./output.txt', 'utf8');

const passed = /(\d+)\spassing/.exec(fileContents);
const failed = /(\d+)\sfailing/.exec(fileContents);

console.log('Custom script being here:');
console.log('passed:', passed ? passed[1] : 0);
console.log('failed:', failed ? failed[1] : 0);