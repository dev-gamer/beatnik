const artistModel = require('../model/artist.model')

exports.artistPortfolio_saved = (req, res) => {
    if (req.params.userID) {
        artistModel.getPortfolioData_saved(req.params.userID, (err, response) => {
            if (err) {
                res.send(err)
            } else {
                if (response.length > 0) {
                    res.json({
                        status: true,
                        msg: "Artist portfolio data",
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

exports.artist_saved_upload = (req, res) => {
    
    if (req.body.userID) {  
        artistModel.getPortfolioData_saved(req.body.userID, (err, response) => {
            if (err) {
                res.send(err)
            } else {
                if (response.length > 0) {
                    artistModel.updatePortfolio_saved(req.body, (err, response) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.json({
                                status: true,
                                msg: "Artist portfolio updated successfully"
                            })
                        }
                    })
                } else {
                    artistModel.uploadPortfolio_saved(req.body, (err, response) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.json({
                                status: true,
                                msg: "Artist portfolio inserted successfully"
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