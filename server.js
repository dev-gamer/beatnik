const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3306
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//route
app.get("/", (req, res) => {
    res.send("Test OK")
})

//user
const userRoutes = require('./src/routes/user.route')
app.use('/api/v1/users', userRoutes)

//common uploader for files
const uploaderRoute = require('./src/routes/commonUploader.route')
app.use('/api/v1/common/uploader', uploaderRoute)

//artist
const artistRoutes = require('./src/routes/artist.route')
app.use('/api/v1/artist', artistRoutes)

//org
const orgRoutes = require('./src/routes/org.route')
app.use('/api/v1/org', orgRoutes)

//extra
const extraRoutes = require('./src/routes/extra.route')
app.use('/api/v1/extra', extraRoutes)

//listen
app.listen(port, ()=>{
    console.log(`Server: Express running at ${port}`)
})