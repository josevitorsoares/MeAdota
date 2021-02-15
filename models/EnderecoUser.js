const pool = require('../db')

let EnderecoUser = function (data) {
    this.data = data
    this.errors = []
}

EnderecoUser.prototype.insertEndereco = async function (id) {
    const query_endereco = 'insert into endereco(cep, estado, cidade, bairro, rua, id_usuario_fk) values ($1, $2, $3, $4, $5, 6$)'
    const values_endereco = [this.data.input_cep, this.data.input_estado, this.data.input_cidade, this.data.input_bairro, this.data.input_rua, id]
    
    return new Promise((resolve, reject) => {
        pool.query(query_endereco, values_endereco, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve("dados do endereco inseridos com sucesso");
            }
        })
    })
}

EnderecoUser.prototype.getIdUsuarioFk = async function(){
    const query_iduauriofk = 'select id_usuario from usuario order by id_usuario desc limit 1'

    return new Promisse((resolve, reject) => {
        pool.query(query_iduauriofk, (error, results) => {
            if(error){
                reject(error)
            } else {
                let id = results.rows[0]
                resolve(id[0]) 
            }
        })
    })
}

module.exports = EnderecoUser