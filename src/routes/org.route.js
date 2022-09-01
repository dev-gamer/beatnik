const express = require('express')
const routes = express.Router()

const orgController = require('.././controller/org.controller')

routes.get('/show/saved/userID/:userID', orgController.orgPortfolio_saved)
routes.post('/upload/saved', orgController.org_saved_upload)


module.exports = routes