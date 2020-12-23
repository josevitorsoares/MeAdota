const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/home')
})

router.get('/login', (req, res) => {
     res.render('pages/login')
})

router.get('/home-logado', (req, res) => {
    res.render('home-logado')
})

router.get('/cadastro-usuario', (req, res) => {
    res.render('pages/cadastro-usuario')
})

router.get('/animal', (req, res) => {
    res.render('pages/animal')
})

module.exports = router