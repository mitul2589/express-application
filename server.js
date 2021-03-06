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
    }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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
    res.render('login');    
});

app.post('/login', (req, res) => {
    sess = req.session;
    sess.email = req.body.email;
    res.end("done");
});

app.get('/logout', (req, res) => {
   req.session.destroy((err) => {
       if (err) return console.log(err);
       res.redirect('/login');
   });
});

app.get('/books', (req, res) => {
    res.send("Books...");
});

app.listen(3000);

//s%3AtFy4-XlwZluJ6ZR2uVqByMaSO0JH1LUi.%2FZuE2208l2Z2OrRTAaW950Nai7OAT5JUKLCy77cwm7U
//s%3A8CYmOyIDsW3LYyWsV-XH6TU3yP-6a4Bx.S2KsPmXoOKHk%2FXFRq5OkNLmN%2Fn8qWMF5kfVTU5KJ2SI