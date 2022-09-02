const extraModel = require('../model/extra.model')

//save email holder
exports.saveEmailHolder = (req, res) => {
    if (req.params.email) {
        extraModel.saveEmailHolder(req.params.email, (err, response) => {
            if (err) {
                res.send(err)
            } else {
                res.json({
                    valid: true,
                    status: "OK",
                    message: "Email saved successfully"
                })
            }
        })
    } else {
        res.json({
            valid: true,
            status: "NOK",
            message: "Wrong request"
        })
    }
}

//save contact form
exports.saveContactForm = (req, res) => {
    if (req.body.fullName) {
        extraModel.saveContactForm(req.body, (err, response) => {
            if (err) {
                res.send(err)
            } else {
                res.json({
                    valid: true,
                    status: "OK",
                    message: "Contact form saved successfully"
                })
            }
        })
    } else {
        res.json({
            valid: true,
            status: "NOK",
            message: "Wrong request"
        })
    }
}