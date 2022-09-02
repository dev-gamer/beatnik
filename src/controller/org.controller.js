const orgModel = require('../model/org.model')

exports.orgPortfolio_saved = (req, res) => {
    if (req.params.userID) {
        orgModel.getPortfolioData_saved(req.params.userID, (err, response) => {
            if (err) {
                res.send(err)
            } else {
                if (response.length > 0) {
                    res.json({
                        valid: true,
                        status: "OK",
                        message: "Org portfolio data",
                        result: response[0]
                    })
                } else {
                    res.json({
                        valid: false,
                        status: "NOK",
                        message: "No data found"
                    })
                }
            }
        })
    } else {
        res.json({
            valid: false,
            status: "NOK",
            msg: "Wrong request"
        })
    }
}

exports.org_saved_upload = (req, res) => {
    
    if (req.body.userID) {  
        orgModel.getPortfolioData_saved(req.body.userID, (err, response) => {
            if (err) {
                res.send(err)
            } else {
                if (response.length > 0) {
                    orgModel.updatePortfolio_saved(req.body, (err, response) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.json({
                                valid: true,
                                status: "OK",
                                message: "Org portfolio updated successfully"
                            })
                        }
                    })
                } else {
                    orgModel.uploadPortfolio_saved(req.body, (err, response) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.json({
                                valid: true,
                                status: "OK",
                                message: "Org portfolio inserted successfully"
                            })
                        }
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