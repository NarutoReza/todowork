const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
const PORT = 8080

const cors = require('cors')
app.use(cors())

const Routes = require('./Routes/Router')
app.use(bodyparser.json())
app.use('/', Routes)

mongoose
    .connect("mongodb://localhost:27017/todo_list")
    .then(() => {
        console.log("Database is connected and live!")
    })

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})