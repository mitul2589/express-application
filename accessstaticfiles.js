var express = require('express');
var app = express();
var path = require('path');

// To access http://localhost:3000/css/styles.css
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
   res.end("Start");
});

app.listen(3000);