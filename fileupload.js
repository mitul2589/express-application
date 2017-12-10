var express = reuqire('express');
var app = express();
var bodyparser = require('body-parser');
var multer = require('multer');

var storage = multer.diskStorage({
   destination: function (req, file, callback) {
    callback(null, '/.Uploads');
   }, filename: function(req, file, callback) {
       callback(null, file.fieldname + '_' + file.filename);
   }
});

var upload = multer({
    storage: storage
}).single('uploadfile');

app.listen(3000);