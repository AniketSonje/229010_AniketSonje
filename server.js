const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile('public/index.html',{root:__dirname})
  })

app.listen(3010)
console.log("Connected Successfully")
