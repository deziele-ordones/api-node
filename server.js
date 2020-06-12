const express = require('express')
const bodyParser =require('body-parser')
const mongoose =require('mongoose')


var port = 3000
var app = express()

app.listen(port, function() {
  console.log(`Server is running at localhost:${port}`)
}) 

mongoose.connect("mongodb+srv://api-node:14102008De.@cluster0-3voqx.mongodb.net/<dbname>?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})

app.use(bodyParser.json())

const users={

}


app.use('/',require('./src/routes.js'))






