const Post = require('../models/Post')

exports.cadastro_animal_form = function (req, res) {
    if (req.session.user) {
        res.render('pages/cadastro-animal')
    } else {
        res.render('pages/cadastro-animal')
    }
}

exports.cadastro_animal = function (req, res) {
    let post = new Post(req.body, req.session.user.emailUsuario)

    post.create_animal(req.file.filename).then(function (results) {
        res.redirect('/home')
    }).catch(function (error) {
        res.send(error)
    })
}

exports.readAllAnimal = function (req, res) {
    let post = new Post(req.body, null)

    post.readAll().then(function (results) {
        res.render('pages/home', { results })
    }).catch(function (error) {
        res.send(error)
    })
}