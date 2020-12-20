const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
     res.render('login')
})

app.get('/home-logado', (req, res) => {
    res.render('home-logado')
})

app.get('/cadastro-usuario', (req, res) => {
    res.render('cadastro-usuario')
})

app.get('/animal', (req, res) => {
    res.render('animal')
})

app.listen(port, () => {})