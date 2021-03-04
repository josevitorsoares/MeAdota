const Animal = require('../models/Animal')

exports.pages_animal = function(req, res){
    let email_usuario = req.params.animal
    let id_animal = req.params.id_animal
    let animal = new Animal(req.body)

    animal.page_animal(email_usuario, id_animal).then(function(result){
        res.render('pages/animal', { result })
    }).catch()
}