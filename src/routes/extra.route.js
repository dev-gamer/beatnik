const express = require('express')
const routes = express.Router()

const extraController = require('.././controller/extra.controller')

routes.get('/emailHolder/save/email/:email', extraController.saveEmailHolder)
routes.post('/contactForm/save', extraController.saveContactForm)


module.exports = routes