require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(cors())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const routes = require('./routes/index')

app.use('/api', routes)
app.listen(4800, function () {
  console.info("API Started")
});


module.exports = app
