var expres = require('express');
var app = express();
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.static('_dirname'+'/public'))
var urlencodedBodyParser = bodyParser.urlencoded({extended:false});
app.use(urlencodedBodyParser);

app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.send('hello World');
});

app.listen(3000);