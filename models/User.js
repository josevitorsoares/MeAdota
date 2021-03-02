const pool = require('../db')
const bcrypt = require('bcryptjs')

let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.login = function () {
    return new Promise((resolve, reject)=>{
        this.readOneByUserName().then((usuarioRecuperado)=>{
            if(usuarioRecuperado &&  bcrypt.compareSync(this.data.senha, usuarioRecuperado.senha)) {
                resolve(usuarioRecuperado.nome)
            } else {
                reject('Usuario invalido')
            }
        }).catch((error) => {
            reject('Erro ao fazer login')
            console.log(error)
        })
    })
}

User.prototype.readOneByUserName = function () {
    const consulta = "select * from usuario u where u.email like $1"
    const values = [this.data.email]
    return new Promise((resolve, reject) => {
        pool.query(consulta, values, (error, results) => {
            if (error) {
                reject(error)
            } else {
                usuarioRecuperado = results.rows[0]
                resolve(usuarioRecuperado)
            }
        })
    })
}

User.prototype.createUser = async function () {
    let salt = bcrypt.genSaltSync(10)
    this.data.input_senha = bcrypt.hashSync(this.data.input_senha, salt)

    const query_usuario = 'insert into usuario(nome, email, senha, whatsapp, cep, estado, cidade, bairro, rua) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
    const values_usuario = [
        this.data.input_nome, 
        this.data.input_email, 
        this.data.input_senha, 
        this.data.input_numero, 
        this.data.input_cep, 
        this.data.input_estado, 
        this.data.input_cidade, 
        this.data.input_bairro, 
        this.data.input_rua
    ]

    return new Promise((resolve, reject) => {
        pool.query(query_usuario, values_usuario, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve('Usuario inserido com sucesso!\n'+results)
            }
        })
    })
}

User.prototype.insertEndereco = async function () {
    const query_endereco = 'insert into endereco(cep, estado, cidade, bairro, rua, email_usuario_fk) values ($1, $2, $3, $4, $5, 6$)'
    const values_endereco = [this.data.input_cep, this.data.input_estado, this.data.input_cidade, this.data.input_bairro, this.data.input_rua, this.data.email]
    
    return new Promise((resolve, reject) => {
        pool.query(query_endereco, values_endereco, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve("dados do endereço inseridos com sucesso");
            }
        })
    })
}

module.exports = User