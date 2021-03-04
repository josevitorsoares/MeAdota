const express = require('express')
const router = express.Router()
const multer = require('multer')
const multerConfig = require('./configs/multer')

const userController = require('./controllers/userController')
const postController = require('./controllers/postController')
const animalController = require('./controllers/animalController')

//  Rotas do usuário
router.get('/login', userController.login_form)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.get('/cadastro-usuario', userController.cadastro_usuario)
router.post('/register', userController.save_user)
router.get('/logout', userController.logout)

//  Rotas do Post
router.get('/cadastro-animal', userController.isLogged, postController.cadastro_animal_form)
router.post('/cadastro-animal', userController.isLogged, multer(multerConfig).single('imagem_animal'), postController.cadastro_animal)
router.get('/', postController.readAllAnimal)
router.get('/home', postController.readAllAnimal)

// Rotas Animal
router.get('/paginaAnimal/:animal/:id_animal', animalController.pages_animal)

module.exports = router