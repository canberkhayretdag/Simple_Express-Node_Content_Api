const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()
const port = 3000
app.use(express.json());

const api__router = require('./router')

app.use('/api', api__router)

app.get('/', (req, res) => {
  res.send('Welcome, Simple JavaScript Content Analyzer...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})