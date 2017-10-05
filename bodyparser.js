var express = require('express');
var app = express();
var async = require('async');
var fs = require('fs');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(session({
    secret: 'test',
    cookie: {
        path: "/",
        //secure: true,
        httpOnly: true,
        maxAge: 2000000
    },
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

//to render html files
//app.use(express.static('src/views'));

app.set('views', path.join(__dirname + '/src/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var sess;

var drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
];

app.get('/', (req, res) => {
    sess = req.session;
    if (sess.email) {
        res.render('index', {title: 'vx', drinks: drinks});
    } else {
        res.redirect('/login');
    }    
});

app.get('/login', (req, res) => {
    res.render('bodyparser');    
});

app.post('/login', (req, res) => {
    console.log("req.body" + req.body.email);
    sess = req.session;
    sess.email = req.body.email;
    res.end("done");
});

app.listen(3000);
