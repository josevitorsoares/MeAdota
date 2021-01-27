const pool = require('../db')

let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.create_user = function () {

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
                let id_usuario_fk
                id_usuario_fk = results.rows[0]

                resolve(id_usuario_fk[0])
                

                console.log('Usuario inserido com sucesso!')
                console.log(id_usuario_fk[0])
            }
        })
    })
}

User.prototype.insertEndereco = function (id) {
    const query_endereco = 'insert into endereco(cep, estado, cidade, bairro, rua, id_usuario_fk) values ($1, $2, $3, $4, $5, 6$)'
    const values_endereco = [this.data.input_cep, this.data.input_estado, this.data.input_cidade, this.data.input_bairro, this.data.input_rua, id]

    new Promisse((resolve, reject) => {
        pool.query(query_endereco, values_endereco, (error, results) => {
            if(error){
                reject(error)
            } else {
                resolve('Endereco insereido com sucesso')
            }
        })
    })
}

module.exports = User