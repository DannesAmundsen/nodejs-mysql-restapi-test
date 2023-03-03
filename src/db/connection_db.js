const mysql = require("mysql2/promise")
const {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    DB_PORT
} = require("../config")

try{
    var pool = mysql.createPool({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        port:DB_PORT
    })
}
catch(err){
    console.log("Erro on connection with database")
}

module.exports.pool = pool