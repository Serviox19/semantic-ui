var express = require('express');
var app = express();
var logger = require('morgan');
var PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));
app.use("/views", express.static(__dirname + "/views"));
app.use("/semantic", express.static(__dirname + "/semantic"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));


//Routes
app.get('/', function (req, res, next) {
  res.sendFile(process.cwd() + '/index.html');
});

app.get('/places', function (req, res, next) {
  res.sendFile(process.cwd() + '/views/places.html');
});

app.get('/people', function (req, res, next) {
  res.sendFile(process.cwd() + '/views/people.html');
});

app.get('/food', function (req, res, next) {
  res.sendFile(process.cwd() + '/views/food.html');
});


app.listen(PORT, function (req, res) {
  console.log("Listening on PORT: " + PORT);
});
