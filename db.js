const { Pool } = require('pg')

const pool = new Pool({
    user: 'rjmaqjzo',
    host: 'motty.db.elephantsql.com',
    database: 'rjmaqjzo',
    password: '5oJQX2S1su-uQkYD1fL6IyfkyayGa_Tj',
    port: 5432,
})

module.exports = pool