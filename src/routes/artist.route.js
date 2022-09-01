const express = require('express')
const routes = express.Router()

const artistController = require('.././controller/artist.controller')

routes.get('/show/saved/userID/:userID', artistController.artistPortfolio_saved)
routes.post('/upload/saved', artistController.artist_saved_upload)


module.exports = routes