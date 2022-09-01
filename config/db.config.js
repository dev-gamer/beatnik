const db = require('mysql')
const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'beatnik'
})

//connect
connection.connect(function (err) {
    if (err) throw err
    console.log("Database Connected Successfully");
})

module.exports = connection