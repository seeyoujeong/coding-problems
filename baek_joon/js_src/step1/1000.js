// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// const a = Number(input[0]);
// const b = Number(input[1]);

// console.log(a + b);

const readline = require("readline");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.on('line', (line) => {
    input = line.split(' ').map(el => Number(el));
    console.log(input[0] + input[1]);
    r.close()
}).on('close', () => process.exit());