const express = require('express')
const bodyParser =require('body-parser')
const mongoose =require('mongoose')


var port = 3000
var app = express()

app.listen(port, function() {
  console.log(`Server is running at localhost:${port}`)
}) 

mongoose.connect("mongodb+srv://api-node:14102008De.@cluster0-3voqx.mongodb.net/<dbname>?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.json())

const users={

}

const User =require("./src/models/user")

app.post('/', async(req, res) =>{

  const {nome,cidade, idade} = req.body
  const user = await User.create({nome,cidade, idade})

  res.json({user})
})
//MONGODB




