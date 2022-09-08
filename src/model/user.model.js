const dbConn = require('../../config/db.config')

var Users = function (user){
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.password = user.password
    this.phoneNumber = user.phoneNumber
    this.joinAs = user.joinAs
    this.aboutMe = user.aboutMe
    this.createdAt = user.createdAt
    this.isActive = 1
}

//get all active users
Users.getAllActiveUsers = (result) => {
    dbConn.query("SELECT id, name, email, phoneNumber, joinAs, aboutMe, fromSocial, dob, gender, country, city, createdAt from users WHERE isActive = 1", (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//get single user by id
Users.getSingleUserByID = (id, result) => {
    dbConn.query("SELECT id, name, email, phoneNumber, joinAs, aboutMe, fromSocial, dob, gender, country, city, createdAt from users WHERE isActive = 1 AND id =?", id, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//check for mail exists
Users.checkForMailExists = (email, result) => {
    dbConn.query("SELECT email FROM users WHERE email = ?", email, (err, res) => {
        if (err) {
            result (err)
        } else {
            result(null, res)
        }
    })
}

//check for phone number
Users.checkForContactExists = (phoneNumber, result) => {
    dbConn.query("SELECT email FROM users WHERE phoneNumber = ?", phoneNumber, (err, res) => {
        if (err) {
            result (err)
        } else {
            result(null, res)
        }
    })
}

//register user
Users.registerUsers = (userData, result) => {
    dbConn.query("INSERT INTO users SET ?", userData, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res.id)
        }
    })
}

//login and get details by id and password
Users.getUserDetailsByIDnPass = (credData, result) => {
    dbConn.query("SELECT * FROM users WHERE email = ? AND password = ?", credData, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//user data update
Users.updateUserDataByID = (dataArr, result) => {
    dbConn.query("UPDATE users SET ? WHERE id = ? ", [dataArr, dataArr.id], (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//set user portfolio status
Users.setPortfolioStatus = (statusArr, result) => {
    dbConn.query("UPDATE users SET portfolio_status = ? where id = ? ", [statusArr.status, statusArr.userID], (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//get random users id's
Users.getRandUsersID = (userID, result) => {
    dbConn.query("SELECT id FROM users WHERE id <> ? ", userID, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//get user detail by email
Users.getUserDetailByEmail = (email, result) => {
    dbConn.query("SELECT id, name, email FROM users WHERE email = ? ", email, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//reset password
Users.resetPassword = (credArr, result) => {
    dbConn.query("UPDATE users SET password = ? WHERE email = ? ", [credArr.password, credArr.email], (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

module.exports = Users