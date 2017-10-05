var app = require('express')();

app.get('/*', (req, res) => {
    res.send("dbdd");
});

app.listen(8000);