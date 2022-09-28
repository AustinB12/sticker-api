const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', async (req, res) => {
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
  fs.readFile('stickers.json', (err, data) => {
    if (err) throw err
    let stickers = JSON.parse(data)
    res.send(stickers)
  })
})

module.exports = router
