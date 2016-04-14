/**
 * Created by Ricci on 13/04/2016.
 */
var fs = require('fs');
var path = './files';

module.exports.list = function(){
    var files = fs.readdirSync(path);
    var result = [];
    for(var i = 0; i < files.length; i++){
        var properties = fs.statSync(path + '/' + files[i]);
        var file = {};
        file['name'] = files[i];
        file['size'] = properties.size;
        result.push(file);
    }
    return result;
}