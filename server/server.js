// create an express app
const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '1mb' }))
app.use('/api', require('./src/routers'))
// start the server listening for requests
app.listen(process.env.PORT || 3300,
  () => console.log("Server is running..."));
