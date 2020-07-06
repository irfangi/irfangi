const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/dist'));

app.listen(8080)
console.log("Listening on port 8080");
