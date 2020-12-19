var user = "jose.vitor.soares@hotmail.com"
var password = "sayajinblue"

function validaLogin(){
    document.getElementById("error-e.mail").style.display = "none"
    document.getElementById("error-pass").style.display = "none"
    
    if(isEmpety() == true){
        var chave = document.getElementById("error-pass")
        chave.innerHTML = "Algum campo está vazio"
        chave.style.display = "block"
    } else {
        var usuario = document.getElementById("login").value
        var senha = document.getElementById("password").value
    
        if(user != usuario && password != senha){
            document.getElementById("error-e.mail").style.display = "flex"
            document.getElementById("error-pass").innerHTML = "Senha incorreta"
            document.getElementById("error-pass").style.display = "flex"
        } else if(user != usuario){
            document.getElementById("error-e.mail").style.display = "flex"
        } else if(password != senha){
            document.getElementById("error-pass").innerHTML = "Senha incorreta"
            document.getElementById("error-pass").style.display = "flex"
        } else{
            login()
        }
    }
    
}

function login(){
    window.location.href = "/home-logado"
}

function isEmpety(){
    if(document.getElementById("login").value == "" || document.getElementById("password").value == ""){
        return true;
    } else {
        return false
    }
}