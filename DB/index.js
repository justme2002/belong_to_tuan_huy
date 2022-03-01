const { createConnection } = require('mysql');

const connection = createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "authentication_DB"
})

module.exports = connection