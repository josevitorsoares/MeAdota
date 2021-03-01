const pool = require('../db')

let Post = function (data, email) {
    this.data = data
    this.errors = []
    this.email = email
}

Post.prototype.create_animal = function () {
    const consulta = "insert into animal(nome_animal, descricao, especie, sexo, tamanho, estado, cidade, cuidados_veterinarios, observacoes, imagem, email_usuario_fk) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)"
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


module.exports = Post