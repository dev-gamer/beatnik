const db = require('mysql2')
const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Beat@@#$1234#123456789',
    database: 'beatnik'
})

// 'Beat@@#$1234#123456789'

connection.connect(function (err) {
    if (err) throw err
    console.log("Database Connected Successfully");
})

// module.exports = {
//     DB_PORT: 4300,
//     DB_URL: "mongodb://localhost:5000/beatnik"
// 

module.exports = connection