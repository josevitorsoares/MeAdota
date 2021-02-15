const express = require('express')
const app = express()
const session = require('express-session')

const expressLayouts = require('express-ejs-layouts')
const router = require('./router')

let sessionOptions = session ({
    secret: 'ajkluwebuiṕśjfbksfçguiwńjgbanfbluwernfbç',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.urlencoded({ extended: false }))
app.use(express.json()) 

app.use('/', router)

app.listen(process.env.APP_PORT, () => {})