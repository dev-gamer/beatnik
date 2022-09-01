const dbConn = require('../../config/db.config')

let Artist = function (artist) {
    this.id = artist.id
    this.userID = artist.userID
} 

//get portfolio
Artist.getPortfolioData_saved = (userID, result) => {
    dbConn.query("SELECT * FROM artist_portfolio_saved WHERE userID = ?", userID, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//upload artist portfolio saved
Artist.uploadPortfolio_saved = (dataArr, result) => {
    dbConn.query("INSERT INTO artist_portfolio_saved SET ? ", dataArr, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//update artist portfolio saved
Artist.updatePortfolio_saved = (dataArr, result) => {
    dbConn.query("UPDATE artist_portfolio_saved SET ? WHERE userID = ? ", [dataArr, dataArr.userID], (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

module.exports = Artist