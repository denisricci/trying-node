/**
 * Created by Ricci on 12/04/2016.
 */
var app = require('./config/express')();
var http = require('http');

var router = require('./routes/files');
app.use('/files',router);

http.createServer(app).listen(app.get('port'), function(){
    console.log('listening port ' + app.get('port'));
});
