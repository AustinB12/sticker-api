const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const routes = require('./routes/routes')
app.use('/', routes)

app.set('port', 7777)

app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${app.get('port')}`)
})
