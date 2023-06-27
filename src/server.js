const express = require('express')
const cors= require('cors')
const app = express()
const port = 3005

app.use(cors())

const frase = require('../frase.json');

app.get('/frase', (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(frase))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})