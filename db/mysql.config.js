var mysql = require('mysql');

var env_dev = {
    host:'localhost',
    user:'root',
    password: '0000',
    database: 'exsDB',
    port: '3306'
}

var env_pro = {
    host:'localhost',
    user:'root',
    password: '0000',
    database: 'exsDB',
    port: '3306'
}


module.exports = function conn(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '0000',
        database: 'exsDB',
        post: '3306'
    })
}






// {
//     var connection = 

//     connection.connect()

//     connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//     if (err) throw err

//     console.log('The solution is: ', rows[0].solution)
//     })

//     connection.end()
// }