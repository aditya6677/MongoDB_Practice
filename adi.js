var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/users');
var api = require('./api.js');
var app = express();
mongoose.connect('mongodb://localhost/mydb');


// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendFile('login.html',{"root":__dirname+'/views'});
});

app.get('/register',function(req,res){
  res.sendFile('register.html',{"root":__dirname+'/views'});
});

app.post('/register',api.register);


app.listen(3000, function() {
  console.log('listening on 3000')
})