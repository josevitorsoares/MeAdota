const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
     res.render('login')
})

app.get('/home-logado', (req, res) => {
    res.render('home-logado')
})

app.get('/cadastro-usuario', (req, res) => {
    res.render('cadastro-usuario')
})

app.get('/animal', (req, res) => {
    res.render('animal')
})

// app.post('/home-logado', (req, res) => {
//     var user = "jose.vitor.soares@hotmail.com"
//     var password = "sayajinblue"
    
//     document.getElementById("error-e.mail").style.display = "none"
//     document.getElementById("error-pass").style.display = "none"

//     if(isEmpety() == true){
//         var chave = document.getElementById("error-pass")
//         chave.innerHTML = "Algum campo está vazio"
//         chave.style.display = "block"
//     } else {
//         var usuario = req.body.login
//         var senha = req.body.password

//         if(user != usuario && password != senha){
//             document.getElementById("error-e.mail").style.display = "flex"
//             document.getElementById("error-pass").innerHTML = "Senha incorreta"
//             document.getElementById("error-pass").style.display = "flex"
//         } else if(user != usuario){
//             document.getElementById("error-e.mail").style.display = "flex"
//         } else if(password != senha){
//             document.getElementById("error-pass").innerHTML = "Senha incorreta"
//             document.getElementById("error-pass").style.display = "flex"
//         } else{
//             res.render('/')
//         }
//     }

//     function isEmpety(){
//         if(req.body.login == "" || req.body.password == ""){
//             return true
//         } else {
//             return false
//         }
//     }
// })

app.listen(port, () => {})