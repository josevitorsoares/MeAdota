const pool = require('../db')

let EnderecoUser = function (data) {
    this.data = data
    this.errors = []
}

EnderecoUser.prototype.insertEndereco = function () {
    // console.log(this.data);
    const query_endereco = 'insert into endereco(cep, estado, cidade, bairro, rua, id_usuario_fk) values ($1, $2, $3, $4, $5, 6$)'
    const values_endereco = [this.data.input_cep, this.data.input_estado, this.data.input_cidade, this.data.input_bairro, this.data.input_rua]
    
    return new Promise((resolve, reject) => {
        pool.query(query_endereco, values_endereco, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve("dados do endereçp inseridos com sucesso");
            }
        })
    })
}

module.exports = EnderecoUser