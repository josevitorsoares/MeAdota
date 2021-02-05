const pool = require('../db')

let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.create_user = async function () {

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
                let id_usuario
                id_usuario = results.rows[0]

                console.log("Usuario inserido com sucesso!")
                // console.log(id_usuario[0])

                resolve(id_usuario[0])
            }
            pool.end()
        })
    })
}

module.exports = User