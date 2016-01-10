var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var db = require('./serverSide/database/db.js');
//var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('./client'));

app.get('/data', function(req, res, next){
  db.users.find({}, function(err, data){
    if(err){
      res.status(500);
    }else{
      res.status(200).send(data);
    }
  })
});

// app.get('/', function(req, res, next){
//   console.log('insde something');
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

//setting its port
app.listen(port);
