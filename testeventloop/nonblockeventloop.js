const http = require('http');
const { fork } = require('child_process');



const server = http.createServer();
server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const compute = fork('compute.js');
    compute.send("Start");
    console.log(compute.pid);
    compute.on('message', (sum) => {
        console.log(`Sum is ${sum}`);
        res.end("end", compute.pid);
    });
  } else {
    res.end('Ok')
  }
});

server.listen(3000);

