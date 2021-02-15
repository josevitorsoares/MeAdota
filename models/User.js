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
                resolve('Usuario valido')
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
    const consulta = "select * from usuario u where u.email=$1"
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

    const query_usuario = {
        text: 'insert into usuario(nome, email, senha, whatsapp) values ($1, $2, $3, $4) returning id_usuario',
        rowMode: 'array'
    }
    const values_usuario = [this.data.input_nome, this.data.input_email, this.data.input_senha, this.data.input_numero]

    return new Promise((resolve, reject) => {
        pool.query(query_usuario, values_usuario, (error, results) => {
            if (error) {
                reject(error)
            } else {
                let id_usuario_fk = results.rows[0]
                console.log('Usuario inserido com sucesso!')
                resolve(id_usuario_fk[0])
            }
        })
    })
}

module.exports = User