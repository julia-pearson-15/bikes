var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var moment = require('moment');

var urlencodedBodyParser = bodyParser.urlencoded({extended:false});
app.use(urlencodedBodyParser);

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname));
app.use(express.static(__dirname+'/bower_components'));

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var mongoUrl = "mongodb://localhost:27017/myDB";
var db;

MongoClient.connect(mongoUrl, function(err, database){
  if (err) {
    console.log(err);
  }
  console.log("connected!");
  db = database;
  process.on('exit', db.close);
})




app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/calendar', function(req, res){
  res.render('calendar');
});

app.get('/calendar/helmets', function(req, res){
  res.render('calendar');
});

app.get('/calendar/events', function(req,res){
  console.log('ajax worked');
  db.collection('events').find({}).toArray(function(error, results){
    res.json(results);
  })
});







app.listen(process.env.PORT || 3000);