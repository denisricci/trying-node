/**
 * Created by Ricci on 12/04/2016.
 */
'use strict'
var express = require('express');
var app = express();

module.exports = function (){
    app.use(express.static('./public'));
    app.set('port', 3000);
    return app;
}