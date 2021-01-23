const pool = require('../db')

let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.create_user = function () {
    //TODO
    // console.log(this.data)
    const consulta = 'insert into usuarios(nome, senha) values ($1, $2);'
    const values = [this.data.input_nome, this.input_nome]
    pool.query(consulta, values, (error, results) =>{
        if(error){
            throw error
        } console.log('Usuário inserido com sucesso!')
    })
}

module.exports = User