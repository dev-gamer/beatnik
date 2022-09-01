const dbConn = require('../../config/db.config')

let Extra = function (extra) {

} 

Extra.saveEmailHolder = (email, result) => {
    dbConn.query("INSERT INTO email_holder SET email = ? ", email, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

Extra.saveContactForm = (data, result) => {
    dbConn.query("INSERT INTO contact_form SET ?", data, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}


module.exports = Extra