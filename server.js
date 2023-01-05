const express = require('express')
const app = express()
//rest api
app.get('/', (req, res) => {
    res.sendFile('public/index.html',{root:__dirname})
  })
//connection
app.listen(3010)
console.log("Connected Successfully")
