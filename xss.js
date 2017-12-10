var app = require('express')();
var xss = require('xss');


app.get('/witthoutxss', (req, res) => {
    res.end('hello world <script>alert("vfv");</script>');
});

app.get('/witthxss', (req, res) => {
    res.end(xss('hello world <script>alert("vfv");</script>'));
});

app.listen(3000);