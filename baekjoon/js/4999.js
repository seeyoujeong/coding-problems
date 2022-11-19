// 아!
const fs = require('fs');
const [res, req] = fs.readFileSync('/dev/stdin').toString().split('\n');

if (res.length >= req.length) {
  console.log('go');
} else {
  console.log('no');
}