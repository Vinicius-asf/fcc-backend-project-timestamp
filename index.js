// index.js
// where your node app starts

// init project
var express = require('express');

const createServer = require('./server');

const app = createServer();
app.listen(3000, () => {
  console.log("Server is listening port 3000")
})
