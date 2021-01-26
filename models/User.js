const pool = require('../db')

let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.create_user = function () {
    //TODO

    const query_usuario = 'insert into usuario(nome, email, senha, whatsapp) values ($1, $2, $3, $4)'
    const values_usuario = [this.data.input_nome, this.data.input_email, this.data.input_senha, this.data.input_numero]

    const query_endereco = 'insert into endereco(cep, estado, cidade, bairro, rua) values ($1, $2, $3, $4, $5)'
    const values_endereco = [this.data.input_cep, this.data.input_estado, this.data.input_cidade, this.data.input_bairro, this.data.input_rua]

    return new Promise((resolve, reject) => {
        pool.query(query_usuario, values_usuario, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Usuario inserido com sucesso!')
                pool.query(query_endereco, values_endereco, (error, result) => {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log('Endereco do usuario adicionado com sucesso!')
                    }
                })
            }
        })
    })
}

module.exports = User