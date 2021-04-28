const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Woxsaxxarld!')
})

app.listen(port, () => {
  console.log(`server app listening at ${port}`)
})