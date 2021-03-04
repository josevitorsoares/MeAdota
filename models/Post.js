const pool = require('../db')

let Post = function (data, email) {
    this.data = data
    this.errors = []
    this.email = email
}


Post.prototype.create_animal = function (imagem_animal) {
    
    let value_buttons_sexo = ''

    if (this.data.sexo == 'Macho') {
        value_buttons_sexo = 'Macho'
    } else {
        value_buttons_sexo = 'Fêmea'
    }

    let value_buttons_tamanho = ''

    if (this.data.tamanho == 'P') {
        value_buttons_tamanho = 'P'
    } else if (this.data.tamanho == 'M') {
        value_buttons_tamanho = 'M'
    } else {
        value_buttons_tamanho = 'G'
    }

    let cuidados = ''
    if (this.data.cuidados != null) {
        for (let i = 0; i < this.data.cuidados.length; i++) {
            cuidados = cuidados + this.data.cuidados[i] + ', '
        }
    }

    const consulta = "insert into animal(nome_animal, descricao, especie, sexo, tamanho, estado, cidade, cuidados_veterinarios, observacoes, imagem, email_usuario_fk) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)"
    const values = [
        this.data.nome_animal,
        this.data.descricao,
        this.data.especie,
        value_buttons_sexo,
        value_buttons_tamanho,
        this.data.estado,
        this.data.cidade,
        cuidados,
        this.data.observacoes,
        imagem_animal,
        this.email
    ]
    return new Promise((resolve, reject) => {
        pool.query(consulta, values, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve('Animal inserido com sucesso!\n' + results)
            }
        })
    })
}

Post.prototype.readAll = function () {
    const consulta = "select imagem, nome_animal, cidade, descricao, email_usuario_fk, id_animal from animal"

    return new Promise((resolve, reject) => {
        pool.query(consulta, null, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows)
            }
        })
    })
}

module.exports = Post