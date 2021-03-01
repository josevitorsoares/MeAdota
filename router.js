const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')
const postController = require('./controllers/postController')
//  Rotas do usuário
router.get('/', userController.home)
router.get('/home', userController.home)
router.get('/login', userController.login_form)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.get('/cadastro-usuario', userController.cadastro_usuario)
router.post('/register', userController.save_user)
router.get('/animal', userController.animal)
router.get('/logout', userController.logout)

//  Rotas do Post
router.get('/cadastro-animal', userController.isLogged, postController.cadastro_animal_form)
router.post('/cadastro-animal',userController.isLogged)

module.exports = router