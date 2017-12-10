var app = require('express')();

app.get('/', (req, res) => {
  let sum = 0;
  var start = new Date();
  for (let i = 0; i < 1000000; i++) {
    sum += i;
    res.write("" + sum);
  };
  var end = new Date();
  res.write(" time taken : " + (end-start));
  //return sum;
  res.end(` Handled by process ${process.pid}`);   
});

app.listen(3000);