var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'package.json');

var data = fs.readFileSync(filename, 'utf8');
console.log(JSON.parse(data));