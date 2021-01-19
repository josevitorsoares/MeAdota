const express = require('express')
const { animal } = require('./controllers/userController')
const router = express.Router()

const userController = require('./controllers/userController')

router.get('/', userController.home)

router.get('/home', userController.home)

router.get('/login', userController.login)

router.get('/home-logado', userController.home_logado)

router.get('/cadastro-usuario', userController.cadastro_usuario)

router.post('/register', userController.create_user)

router.get('/animal', userController.animal)

module.exports = router