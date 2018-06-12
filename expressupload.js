const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
var csurf = require('csurf');
var cookieparser = require('cookie-parser'); 
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

//to render html files
//app.use(express.static('src/views'));

app.set('views', path.join(__dirname + '/src'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(cookieparser());
app.use(fileUpload());
app.use(csurf({ cookie: true}));
app.use((req, res, next) => {
  res.locals._csrf = req.csrfToken();
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.get('/', (req, res) => {
  res.render('fileupload.html', {csrfToken: req.csrfToken()});
});

app.post('/upload', function(req, res) {
  console.log(req.body.test);
  console.log(req.files.sampleFile);
  console.log(req.body._csrf);
  res.end('/zcdzc');
});

app.listen(3000);