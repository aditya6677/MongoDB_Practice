var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/users');
var api = require('./api.js');
var app = express();
mongoose.connect('mongodb://localhost/mydb');


app.get('/',function(req,res){
  res.send('Connected');
});

app.get('/login',api.login);


app.listen(3000, function() {
  console.log('listening on 3000')
})