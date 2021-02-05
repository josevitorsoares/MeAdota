const pool = require('../db')

let EnderecoUser = function (data) {
    this.data = data
    this.errors = []
}

EnderecoUser.prototype.insertEndereco = function (id) {
    const query_endereco = 'insert into endereco(cep, estado, cidade, bairro, rua, id_usuario_fk) values ($1, $2, $3, $4, $5, 6$)'
    const values_endereco = [this.data.input_cep, this.data.input_estado, this.data.input_cidade, this.data.input_bairro, this.data.input_rua]

    return new Promisse((resolve, reject) => {
        pool.query(query_endereco, values_endereco, (error_2, results_2) => {
            if (error_2) {
                reject(error_2)
            } else {
                resolve("Endereco insereido com sucesso")
            }
            pool.end()
        })
    })
}

module.exports = EnderecoUser