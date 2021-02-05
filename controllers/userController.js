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
    let enderecouser = new EnderecoUser(req.body)
    // let id_usuario_fk
    user.create_user().then(function (result) {
        // id_usuario_fk = result
        res.render("pages/home")
        
        // console.log('Retornando pelo userController: ' + id_usuario_fk)
        // return enderecouser.insertEndereco()
    }).then(function (result_2) {
        enderecouser.insertEndereco(result_2)
    }).catch(function(error){
        res.send(error)
    })
}

exports.animal = function (req, res) {
    res.render('pages/animal')
}