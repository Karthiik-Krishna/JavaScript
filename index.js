const express = require('express')
const app = express()
const route = require('./routes/route')
app.use('/', route)

app.use('/test', (req, res, next) => {
    res.status(200).json({
        data: "Test successfull in middleware"
    })
    next()
})
app.get('/test', (req, res) => {
    res.status(200).json({
        data: "Test successfull in controller"
    })
})




app.listen(3000, () => {
    console.log("Listening on server 3000")
})