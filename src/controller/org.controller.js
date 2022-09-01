const orgModel = require('../model/org.model')

exports.orgPortfolio_saved = (req, res) => {
    if (req.params.userID) {
        orgModel.getPortfolioData_saved(req.params.userID, (err, response) => {
            if (err) {
                res.send(err)
            } else {
                if (response.length > 0) {
                    res.json({
                        status: true,
                        msg: "Org portfolio data",
                        result: response[0]
                    })
                } else {
                    res.json({
                        status: false,
                        msg: "No data found"
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
                                status: true,
                                msg: "Org portfolio updated successfully"
                            })
                        }
                    })
                } else {
                    orgModel.uploadPortfolio_saved(req.body, (err, response) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.json({
                                status: true,
                                msg: "Org portfolio inserted successfully"
                            })
                        }
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