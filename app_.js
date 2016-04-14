/**
 * Created by Ricci on 10/04/2016.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.listen(3000, function () {
    console.log('Server litening on port 3000');
});

/* SIMPLE REQUEST
 server.on('request', function(req, res){
 res.writeHead(200);
 res.write('Hello World, you send to me: ');
 req.pipe(res);
 });
 */

/* SIMPLE FILE UPLOAD
 server.on('request', function(req, res){
 var newFile = fs.createWriteStream('readme_copy.md');
 req.pipe(newFile);
 req.on('end', function (){
 res.end();
 })
 });
 */
/* PROGESS FILE UPLOAD BUT IS CAUNTING WORONG
server.on('request', function (req, res) {
    var fileBytes = req.headers['content-length'];
    var uploadedBytes = 0;
    console.log(req.url);
    var newFile = fs.createWriteStream('video.mp4');
    req.on('readable', function(){
        var chunk = null;
        while(null !== (chunk = req.read())){
            uploadedBytes += chunk.length;
            var progress = (uploadedBytes / fileBytes) * 100;
            res.write('progress: ' + parseInt(progress,10) + '% total bytes: ' + fileBytes + ' uploadedBytes: '+ uploadedBytes +'\n');
        }
    });
    req.on('end', function(){
       res.write('finish');
       res.end();
    });
    req.pipe(newFile);
});
*/