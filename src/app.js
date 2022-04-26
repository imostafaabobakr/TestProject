const express = require('express');
const {courseRouter} = require('./routes/course')
const {bookRouter} = require('./routes/book')
const {studentRouter} = require('./routes/student')
const app = express()

app.use(express.json())



app.use("/courses/", courseRouter)
app.use("/books/", bookRouter)
app.use("/students/", studentRouter)


module.exports = {app};