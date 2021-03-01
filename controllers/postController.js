exports.cadastro_animal_form = function(req, res){
    if (req.session.user) {
        res.render('pages/cadastro-animal')
    } else {
        res.render('pages/cadastro-animal')
    }
}