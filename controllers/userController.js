const User = require('../models/User')

exports.home = function (req, res) {
    if (req.session.user) {
        res.render('pages/home')
    } else {
        res.render('pages/home')
    }
}

exports.login_form = function (req, res) {
    res.render('pages/login')
}

exports.login = function (req, res) {
    let user = new User(req.body)

    user.login().then(function (result){
        req.session.user = {
            emailUsuario: user.data.email,
            nomeUsuario: result
        }
        req.session.save(function(){
            res.redirect('/home')
        })
    }).catch(function(error) {
        res.send(error)
    })
}

exports.logout = function (req, res) {
    req.session.destroy(function(){
        res.redirect('/home')
    })
}

exports.cadastro_usuario = function (req, res) {
    res.render('pages/cadastro-usuario')
}

exports.save_user = function (req, res) {
    let user = new User(req.body)

    user.createUser().then(function (result_1) {
        return result_1
    }).then(function(result_2){
        res.redirect('/login')
    }).catch(function(error){
        res.send(error)
    })
}

exports.animal = function (req, res) {
    if (req.session.user) {
        res.render('pages/animal')
    } else {
        res.render('pages/animal')
    }
}

exports.isLogged = function (req, res, next){
    if (req.session.user) {
        next()
    } else {
        res.redirect('pages/login')
    }
}