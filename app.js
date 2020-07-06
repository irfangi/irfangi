const express = require('express')
const app = express()

const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist'));

app.listen(port,() =>  {
    console.log("App is running on port " + port);
})
