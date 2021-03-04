const pool = require('../db')
const { param } = require('../router')

let Animal = function (data) {
    this.data = data
    this.errors = []
}

Animal.prototype.page_animal = function (email_usuario, id_animal) {
    const consulta = 'select imagem, sexo, nome_animal, animal.cidade, especie, tamanho, animal.estado, observacoes, nome, whatsapp, email_usuario_fk from animal inner join usuario on ($1 = usuario.email) where id_animal = $2'
    const value = [email_usuario, id_animal]

    return new Promise(function (resolve, reject) {
        pool.query(consulta, value, (errors, results) => {
            if (errors) {
                reject(errors)
            } else {
                resolve(results.rows[0])
            }
        })
    })

}

module.exports = Animal