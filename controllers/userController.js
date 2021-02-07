const EnderecoUser = require('../models/EnderecoUser')
const User = require('../models/User')

exports.home = function (req, res) {
    res.render('pages/home')
}

exports.login = function (req, res) {
    res.render('pages/login')
}

exports.cadastro_usuario = function (req, res) {
    res.render('pages/cadastro-usuario')
}

exports.save_user = function (req, res) {
    let user = new User(req.body)
    let enderecoUser = new EnderecoUser(req.body)
    
    user.create_user().then(function (result_1) {
        console.log('result_1: ' + result_1)
        return enderecoUser.insertEndereco()
    }).then(function (result_2) {
        console.log('result_2: ' + result_2)
        res.render("pages/home") 
    }).catch(function(error){
        res.send(error)
    })
}

exports.animal = function (req, res) {
    res.render('pages/animal')
}