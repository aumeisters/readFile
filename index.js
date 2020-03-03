const { readFile: r} = require('fs');
r('./package.json', (e,x) => (e) ? console.table(e) : console.log(String(x)));