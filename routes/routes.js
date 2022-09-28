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

router.post('/', async (req, res) => {
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })

  fs.writeFile('stickers.json', JSON.stringify({ data: req.body }), (err) => {
    if (err) throw err
    console.log('Data written to file')
    res.json('Success')
  })
})

module.exports = router
