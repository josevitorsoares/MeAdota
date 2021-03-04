const pool = require('./db')
const express = require('express')
const app = express()
const session = require('express-session')
const pgSession = require('connect-pg-simple')(session)
const expressLayouts = require('express-ejs-layouts')
const router = require('./router')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()


let sessionOptions = session({
    store: new pgSession({
        pool: pool,
        tableName: 'user_sessions'
    }),
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

app.use(function (req, res, next) {
    res.locals.user = req.session.user
    next()
})

app.use("/files", express.static(path.resolve(__dirname, 'temp', 'uploads')));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

app.listen(process.env.APP_PORT, () => { })