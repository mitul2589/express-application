const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/' // this saves your file into a directory called "uploads"
}); 

var csurf = require('csurf');
var cookieparser = require('cookie-parser'); 
var path = require('path');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

//to render html files
//app.use(express.static('src/views'));

app.set('views', path.join(__dirname + '/src'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(cookieparser());
app.use(upload.array('filename'));
app.use(csurf({ cookie: true}));
app.use((req, res, next) => {
  res.locals._csrfc = req.csrfToken();
  res.locals.csrfToken = req.csrfToken();
  next();
});


app.get('/', (req, res) => {
  res.render('index');
});

// It's very crucial that the file name matches the name attribute in your html
app.post('/process', (req, res) => {
  console.log(req.body.test);
  console.log(req.files[0].filename);
  console.log(req.body._csrf);
  res.end('/zcdzc');
});

app.listen(3000);