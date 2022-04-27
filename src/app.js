const express = require('express');
const {courseRouter} = require('./routes/course')
const {bookRouter} = require('./routes/book')
const {studentRouter} = require('./routes/student')
const app = express()



const {reviewRouter} = require('./routes/review')


app.use(express.json())



app.use("/courses/", courseRouter)
app.use("/books/", bookRouter)
app.use("/students/", studentRouter)





app.use("/reviews/", reviewRouter)

module.exports = {app};