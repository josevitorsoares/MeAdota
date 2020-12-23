const express = require('express')
const app = express()
const port = 3000

const expressLayouts = require('express-ejs-layouts')
const router = require('./router')

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.urlencoded({ extended: false }))



app.use('/', router)

app.listen(port, () => {})