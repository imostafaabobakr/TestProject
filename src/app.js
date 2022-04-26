const express = require('express');
const {courseRouter} = require('./routes/course')
const {studentRouter} = require('./routes/student')
const app = express()

app.use(express.json())



app.use("/courses/", courseRouter)
app.use("/students/", studentRouter)


module.exports = {app};