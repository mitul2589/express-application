var express = require('express');
var app = express();


app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res) => {
    res.send("Welcome...");
});

app.get('/books', (req, res) => {
    res.send("Books...");
});

app.listen(3000);