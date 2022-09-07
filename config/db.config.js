const db = require('mysql2')
const connection = db.createPool({
    host: 'localhost',
    user: 'root',
    port: 3308,
    password: 'Beat@@#$1234#123456789',
    database: 'beatnik'
})


connection.connect(function (err) {
    if (err) throw err
    console.log("Database Connected Successfully");
})

connection.query("SELECT * FROM users", (err, res) => {
    if (err) {
        throw err
    } else {
        console.log(res)
    }
})

// module.exports = {
//     DB_PORT: 4300,
//     DB_URL: "mongodb://localhost:5000/beatnik"
// }

//Beat@@#$1234#123456789

module.exports = connection