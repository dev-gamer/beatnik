const express = require('express')
const routes = express.Router()

const userController = require('.././controller/user.controller')

routes.get('/', userController.getAllActiveUsers)
routes.get('/id/:id', userController.getSingleUserDataByID)
routes.post('/registerUser', userController.registerUser)
routes.get('/checkUserMail/email/:email', userController.checkUserMail)
routes.get('/checkUserContact/contact/:contact', userController.checkUserContact)
routes.post('/login', userController.loginUser)
routes.post('/update', userController.updateUserData)
routes.post('/setPortfolioStatus', userController.updateUserPortfolioStatus)

module.exports = routes