const express = require('express')
const app = express()
const port = 5000

app.get('/store-image', (req, res) => {
  res.send('Storing image... ' + req.query.image)
})

app.listen(port, () => {
  console.log(`Photobooth app listening on port ${port}`)
})