require('dotenv').config();
var express = require('express')
var bodyParser = require('body-parser')
const apiRouter = require('./routes');


// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use('/api', apiRouter);


// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


app.get('/', (req, res) => {
  res.send('<h1>Prueba tecnica API</h1>');
});


app.listen(4800, function () {
  console.info("API Started")
});


module.exports = app
