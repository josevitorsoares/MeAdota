const EnderecoUser = require('../models/EnderecoUser')
const User = require('../models/User')

exports.home = function (req, res) {
    res.render('pages/home')
}

exports.login_form = function (req, res) {
    res.render('pages/login')
}

exports.login = function (req, res) {
    let user = new User(req.body)
    user.login().then(function (result){
        console.log(result)
        res.render('pages/home')
    }).catch(function(error) {
        res.send(error)
    })
}

exports.cadastro_usuario = function (req, res) {
    res.render('pages/cadastro-usuario')
}

exports.save_user = function (req, res) {
    let user = new User(req.body)
    let enderecoUser = new EnderecoUser(req.body)

    user.createUser().then(function (result_1) {
        return result_1
    }).then(function (result_2) {
        
        res.render("pages/home")
    }).catch(function(error){
        res.send(error)
    })
}

exports.animal = function (req, res) {
    res.render('pages/animal')
}