const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/login', (req, res) => {
     res.render('pages/login')
})

app.get('/home-logado', (req, res) => {
    res.render('home-logado')
})

app.get('/cadastro-usuario', (req, res) => {
    res.render('pages/cadastro-usuario')
})

app.get('/animal', (req, res) => {
    res.render('pages/animal')
})

app.listen(port, () => {})