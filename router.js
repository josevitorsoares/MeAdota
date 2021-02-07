const express = require('express')
const { animal } = require('./controllers/userController')
const router = express.Router()

const userController = require('./controllers/userController')

router.get('/', userController.home)

router.get('/home', userController.home)

router.get('/login', userController.login_form)

router.post('/login', userController.login)

router.get('/cadastro-usuario', userController.cadastro_usuario)

router.post('/register', userController.save_user)

router.get('/animal', userController.animal)

module.exports = router