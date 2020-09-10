require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./app/router')

const port = 3000
const app = express()

app.use(bodyParser.json())
app.use('/', router)
app.use(express.static(`${__dirname}/app/assets/dist`))

app.listen(port, () => {
	console.log(`Server is started on port ${port}`)
})
