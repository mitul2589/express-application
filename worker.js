/*const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for (let i=0; i<1e7; i++) {
    // simulate CPU work
  }
  res.end(`Handled by process ${pid}`);
}).listen(3000, () => {
  console.log(`Started process ${pid}`);
});
*/

var app = require('express')();

app.get('/', (req, res) => {
  let sum = 0;
  var start = new Date();
  for (let i = 0; i < 1000000; i++) {
    sum += i;
    res.write("" + sum);
  };
  var end = new Date();
  res.write("   Time taken : " + (end-start)/1000);
  //return sum;
  res.end(`    Handled by process ${process.pid}`);   
});

app.listen(3000);