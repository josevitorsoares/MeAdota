exports.home = function (req, res) {
    res.render('pages/home')
}

exports.login = function (req, res) {
    res.render('pages/login')
}

exports.home_logado = function (req, res) {
    res.render('home-logado')
}

exports.cadastro_usuario = function (req, res) {
    res.render('pages/cadastro-usuario')
}

exports.create_user = function (req, res) {
    console.log(req.body)
}

exports.animal = function (req, res) {
    res.render('pages/animal')
}