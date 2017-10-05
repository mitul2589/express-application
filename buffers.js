var buf = new Buffer([10, 20, 30, 40, 50]); 

console.log(buf.length);

var buf2 = new Buffer(5);
buf2.write("Hello World...@@@");
console.log(buf2.toString());