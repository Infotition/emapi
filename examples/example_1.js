const fs = require('fs');
const parse = require('emapi');

const code = fs.readFileSync('./mapi_files/example_1.md').toString();
const ast = parse(code);
console.log(ast);
