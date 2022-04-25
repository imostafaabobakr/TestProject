const express = require('express');
const {courseRouter} = require('./routes/course')
const app = express()

app.use(express.json())



app.use("/courses/", courseRouter)

module.exports = {app};