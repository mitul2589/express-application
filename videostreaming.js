var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

// To access http://localhost:3000/css/styles.css
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('video.html');
});

app.get('/video', function(req, res) {
    var path = "assets/sample.mp4";
    
    var stat = fs.statSync(path);
    var filesize = stat.size;
    var range = req.headers.range;
    if (range) {
        var parts = range.replace(/bytes=/, "").split("-");
        var start = parseInt(parts[0], 10);
        var end = parts[1]
                ? parseInt(parts[1], 10)
                : filesize-1;
        var chunksize = (end-start) + 1;
        
        var head = {
            "Content-Range": `bytes ${start}-${end}/${filesize}`,
            "Accept-Ranges": 'bytes',
            "Content-Length": chunksize,
            "Content-Type": 'video/mp4'
        };
        res.writeHead(206, head);
        fs.createReadStream(path, {start, end}).pipe(res);
    } else {
        var head = {
            "Content-Length": filesize,
            "Content-Type": 'video/mp4'
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
  });



app.listen(3000);