const pool = require('../db')

let Post = function (data, email) {
    this.data = data
    this.errors = []
    this.email = email
}

Post.prototype.create_animal = function () {
    let buttons_sexo = this.data.sexo
    let value_buttons_sexo

    if (buttons_sexo == 'M') {
        value_buttons_sexo = 'Macho'
    } else {
        value_buttons_sexo = 'Fêmea'
    }

    let buttons_tamanho = this.data.buttons_tamanho
    let value_buttons_tamanho

    if (buttons_tamanho = 'P') {
        value_buttons_tamanho = 'P'
    } else if (buttons_tamanho = 'M') {
        value_buttons_tamanho = 'M'
    } else {
        value_buttons_tamanho = 'G'
    }

    let cuidados = ''
    for (let i = 0; i < this.data.cuidados.length; i++) {
        cuidados = cuidados + this.data.cuidados[i] + ', '
    }

    const consulta = "insert into animal(nome_animal, descricao, especie, sexo, tamanho, estado, cidade, cuidados_veterinarios, observacoes, email_usuario_fk) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)"
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
        this.email
    ]
    return new Promise((resolve, reject) => {
        pool.query(consulta, values, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve('Animal inserido com sucesso!\n'+results)
            }
        })
    })
}

module.exports = Post