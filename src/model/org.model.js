const dbConn = require('../../config/db.config')

let Org = function (org) {
    this.id = org.id
    this.userID = org.userID
} 

//get portfolio
Org.getPortfolioData_saved = (userID, result) => {
    dbConn.query("SELECT * FROM org_portfolio_saved WHERE userID = ?", userID, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//upload Org portfolio saved
Org.uploadPortfolio_saved = (dataArr, result) => {
    dbConn.query("INSERT INTO org_portfolio_saved SET ? ", dataArr, (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

//update Org portfolio saved
Org.updatePortfolio_saved = (dataArr, result) => {
    dbConn.query("UPDATE org_portfolio_saved SET ? WHERE userID = ?", [dataArr, dataArr.userID], (err, res) => {
        if (err) {
            result (err)
        } else {
            result (null, res)
        }
    })
}

module.exports = Org