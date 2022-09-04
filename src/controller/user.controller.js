const userModel = require('../model/user.model')

//get all active users
exports.getAllActiveUsers = (req, res)=> {
    userModel.getAllActiveUsers((err, list) => {
        if (err) {
            console.log('failed');
            res.send(err)
        } else {
            console.log('success');
            res.send(list[0])
        }
    })
}

//get single user by id
exports.getSingleUserDataByID = (req, res)=> {
    userModel.getSingleUserByID(req.params.id, (err, data) => {
        if (err) {
            console.log('failed')
            res.send(err)
        } else {
            if (data.length > 0) {
                res.json({
                    valid: true,
                    status: "OK",
                    message: "User data",
                    result: data[0]
                })
            } else {
                res.json({
                    valid: true,
                    status: "OK",
                    message: "No data found",
                    result: {}
                })
            }
        }
    })
}

// check if mail exists
exports.checkUserMail = (req, res) => {
    if (req.body.Constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({status: false, msg: "Wrong Request"})
    } else {
        userModel.checkForMailExists(req.params.email, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                if (data.length > 0) {
                    res.json({
                        valid: true,
                        status: "OK",
                        message: "Email exists"
                    })
                } else {
                    res.json({
                        valid: false,
                        status: "NOK",
                        message: "Mail dosn't exists"
                    })
                }
            }
        })
    }
}

//check if contact exists
exports.checkUserContact = (req, res) => {
    userModel.checkForContactExists(req.params.contact, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            if (data.length > 0) {
                res.json({
                    valid: true,
                    status: "OK",
                    message: "Contact Exists"
                })
            } else {
                res.json({
                    valid: false,
                    status: "NOK",
                    message: "contact dosn't exists"
                })
            }
        }
    })
} 

//register user
exports.registerUser = (req, res)=> {
    if (req.body.Constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({status: false, msg: "Wrong Request"})
    } else {
        const userData = new userModel(req.body)
        userModel.registerUsers(userData, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.json({
                    valid: true,
                    status: "OK", 
                    message: "User registered successfully", 
                    data:[]
                })
            }
        })
    }
}

//login user
exports.loginUser = (req, res) => {
    if (req.body.email && req.body.password) {
        const credData = [
            email = req.body.email,
            password = req.body.password
        ]
        userModel.getUserDetailsByIDnPass(credData, (err, response) => {
            if (err) {
                res.send(err)
            } else {
                if (response.length > 0) {
                    res.json({
                        valid: true,
                        status: "OK",
                        message: "Logged in successfully",
                        result: response[0]
                    })
                } else {
                    res.json({
                        valid: false,
                        status: "NOK",
                        message: "Wrong email or password"
                    })
                }
            }
        })
    } else {
        res.json({
            valid: false,
            status: "NOK",
            message: "Wrong request"
        })
    }
}

exports.updateUserData = (req, res) => {
    userModel.updateUserDataByID(req.body, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                valid: true,
                status: "OK",
                message: "User data updated successfully"
            })
        }
    })
}

exports.updateUserPortfolioStatus = (req, res) => {
    userModel.setPortfolioStatus(req.body, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                valid: true,
                status: "OK",
                message: "User status updated successfully"
            })
        }
    })
}

exports.getRandUserIDs = (req, res) => {
    if (req.params.userID) {
        userModel.getRandUsersID(req.params.userID, (err, response) => {
            if (err) {
                res.send(err)
            } else {
                if (response.length > 0) {
                    res.json({
                        valid: true,
                        status: "true",
                        message: "Users ID list",
                        result: shuffle(response)
                    })
                } else {
                    res.json({
                        valid: false,
                        status: "NOK",
                        message: "No data found!"
                    })
                }
            }
        })
    } else {
        res.json({
            valid: false,
            status: "NOK",
            message: "Wrong request"
        })
    }
}






// * *************************************************** functions for support ****************************************

//shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
}

// * *************************************************** ends ***********************************************************