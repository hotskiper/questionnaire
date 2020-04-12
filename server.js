const path = require('path')
const express = require('express')
const config = require('config-lite')(__dirname)
const routes = require('./routes/index.js')
const db = require('./lib/db')

const app = express()
app.use(express.json())
routes(app)

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
})

