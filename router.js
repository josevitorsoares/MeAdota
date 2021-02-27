const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

router.get('/', userController.home)

router.get('/home', userController.home)

router.get('/login', userController.login_form)

router.post('/login', userController.login)

router.get('/logout', userController.logout)

router.get('/cadastro-usuario', userController.cadastro_usuario)

router.post('/register', userController.save_user)

router.get('/animal', userController.animal)

router.get('/cadastro-animal', userController.cadastro_animal)

router.get('/logout', userController.logout)

module.exports = router