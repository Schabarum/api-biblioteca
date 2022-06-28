const express = require('express')
const app = express()
app.use(express.json)
require('./services/swagger')
require('./routes')(app)

app.listen(3000)
