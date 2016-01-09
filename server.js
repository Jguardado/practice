var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var db = require('./serverSide/database/app.js');
//var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

// app.get('/', function(req, res, next){
//   console.log('insde something');
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

//setting its port
app.listen(port);
