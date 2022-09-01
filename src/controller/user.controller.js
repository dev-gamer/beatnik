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
                    status: true,
                    msg: "User data",
                    result: data[0]
                })
            } else {
                res.json({
                    status: true,
                    msg: "No data found",
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
                        status: true,
                        msg: "Email exists"
                    })
                } else {
                    res.json({
                        status: false,
                        msg: "Mail dosn't exists"
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
                    status: true,
                    msg: "Contact Exists"
                })
            } else {
                res.json({
                    status: false,
                    msg: "contact dosn't exists"
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
                res.json({status: true, msg: "User registered successfully", data:[]})
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
                        status: true,
                        msg: "Logged in successfully",
                        result: response[0]
                    })
                } else {
                    res.json({
                        status: false,
                        msg: "Wrong email or password"
                    })
                }
            }
        })
    } else {
        res.json({
            status: false,
            msg: "Wrong request"
        })
    }
}

exports.updateUserData = (req, res) => {
    userModel.updateUserDataByID(req.body, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                status: true,
                msg: "User data updated successfully"
            })
        }
    })
}